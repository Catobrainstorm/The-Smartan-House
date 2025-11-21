const express = require('express');
const cors = require('cors');
const axios = require('axios');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify payment with Paystack
async function verifyPayment(reference) {
  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Payment verification error:', error);
    throw error;
  }
}

// Send email confirmation
async function sendConfirmationEmail(data, paymentDetails) {
  const { email, fullName, paymentType, amount, currency } = data;
  
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    cc: process.env.NOTIFICATION_EMAIL,
    subject: `Payment Confirmation - ${paymentType}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366F1;">Payment Successful! 🎉</h2>
        <p>Dear ${fullName},</p>
        <p>Thank you for your generous contribution!</p>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Payment Details</h3>
          <p><strong>Reference:</strong> ${paymentDetails.reference}</p>
          <p><strong>Amount:</strong> ${currency === 'NGN' ? '₦' : '$'}${parseFloat(amount).toLocaleString()}</p>
          <p><strong>Type:</strong> ${paymentType}</p>
          <p><strong>Status:</strong> Successful</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        
        <p>Your contribution is making a real difference!</p>
        <p>Best regards,<br>The Smartan House Team</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}

// Payment webhook/callback endpoint
app.post('/api/payments/verify', async (req, res) => {
  try {
    const { reference, formData, paymentType } = req.body;

    // Verify payment with Paystack
    const verification = await verifyPayment(reference);

    if (verification.status && verification.data.status === 'success') {
      // Send confirmation emails
      await sendConfirmationEmail(
        {
          email: formData.email,
          fullName: formData.fullName,
          paymentType: paymentType,
          amount: formData.amount,
          currency: formData.currency,
        },
        verification.data
      );

      // Here you can also save to database if you have one
      console.log('Payment verified and emails sent:', {
        reference,
        email: formData.email,
        amount: formData.amount,
      });

      res.json({
        success: true,
        message: 'Payment verified and confirmation sent',
        data: verification.data,
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Payment verification failed',
      });
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during payment verification',
      error: error.message,
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Payment server is running' });
});

app.listen(PORT, () => {
  console.log(`Payment server running on port ${PORT}`);
});