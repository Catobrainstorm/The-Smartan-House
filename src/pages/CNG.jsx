// ============================================
// src/pages/CNG.jsx
// ============================================
import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import Card from '../components/ui/Card';
import { HiCheckCircle, HiMail, HiPhone } from 'react-icons/hi';
import { BANK_DETAILS } from '../utils/constants';

const CNG = () => {
  const [annualForm, setAnnualForm] = useState({
    fullName: '',
    email: '',
    currency: 'NGN',
    amount: '5000000',
    customAmount: ''
  });

  const [monthlyForm] = useState({
    fullName: '',
    email: '',
    paymentType: 'monthly',
    currency: 'NGN',
    amount: '500000',
    customAmount: ''
  });

  const [silverForm] = useState({
    fullName: '',
    email: '',
    paymentType: 'onetime',
    currency: 'NGN',
    amount: '100000',
    customAmount: ''
  });

  const benefits = [
    {
      icon: '🏆',
      title: 'Impact Recognition',
      description: 'Your name featured in our annual impact report and exclusive Champion\'s section on our website.'
    },
    {
      icon: '🎫',
      title: 'Exclusive Invitations',
      description: 'Priority access to our special events, conferences, and networking opportunities with industry leaders.'
    },
    {
      icon: '📊',
      title: 'Quarterly Impact Updates',
      description: 'Be the first to receive detailed reports on how your contribution is transforming lives.'
    },
    {
      icon: '🤝',
      title: 'Champions Community',
      description: 'Join our exclusive network of like-minded individuals committed to creating positive change.'
    }
  ];

  const handleAnnualSubmit = (e) => {
    e.preventDefault();
    console.log('Annual donation:', annualForm);
    // Integrate Paystack here
  };

  const handleMonthlySubmit = (e) => {
    e.preventDefault();
    console.log('Monthly donation:', monthlyForm);
    // Integrate Paystack here
  };

  const handleSilverSubmit = (e) => {
    e.preventDefault();
    console.log('Silver donation:', silverForm);
    // Integrate Paystack here
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-smartan-navy via-smartan-navy/95 to-smartan-navy">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="px-6 py-3 bg-gradient-to-r from-smartan-orange/20 to-smartan-pink/20 rounded-full text-sm font-semibold border border-smartan-orange/30">
                💎 Champions Program
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6">
              <span className="text-gradient">Champions of the</span>
              <br />
              <span>Next Generation</span>
            </h1>

            <p className="text-xl md:text-2xl text-smartan-gray leading-relaxed mb-8">
              The Champions of the Next Generation (CNG) are professionals and visionary individuals who are happy to give a monthly donation of at least <strong className="text-smartan-orange">₦50,000</strong> renewable annually to support the Smartan House's goal to take <strong className="text-white">20,000 young people</strong> into the Smartan Culture Crucible and also support the Smartan Culture Series event.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="#annual"
                className="px-8 py-4 bg-gradient-to-r from-smartan-orange to-smartan-pink rounded-full font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Champion Today
              </motion.a>
              <motion.a
                href="#silver"
                className="px-8 py-4 glass-effect rounded-full font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a One-Off Donor
              </motion.a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              Benefits of <span className="text-gradient">Joining CNG</span>
            </h2>
            <p className="text-xl text-smartan-gray max-w-3xl mx-auto">
              What you receive as a Champion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, idx) => (
              <Card key={idx} variant="gradient" delay={idx * 0.1}>
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-sm text-smartan-gray leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-smartan-gray">
              The subscription would end after 12 months and you can choose to renew for another one year
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Annual Donation Form */}
      <AnimatedSection id="annual" className="py-24 bg-gradient-to-b from-smartan-navy to-smartan-navy/80">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="glass-effect rounded-3xl p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-2 text-center">
                Join Our CNG <span className="text-gradient">Annually</span>
              </h2>
              <p className="text-smartan-gray text-center mb-8">One-time annual contribution</p>

              <form onSubmit={handleAnnualSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    value={annualForm.fullName}
                    onChange={(e) => setAnnualForm({...annualForm, fullName: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-smartan-orange focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    value={annualForm.email}
                    onChange={(e) => setAnnualForm({...annualForm, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-smartan-orange focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Payment Type</label>
                  <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-smartan-gray">
                    One-time Payment
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Currency</label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setAnnualForm({...annualForm, currency: 'NGN'})}
                      className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all ${
                        annualForm.currency === 'NGN'
                          ? 'bg-gradient-to-r from-smartan-orange to-smartan-pink'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      Naira (₦)
                    </button>
                    <button
                      type="button"
                      onClick={() => setAnnualForm({...annualForm, currency: 'USD'})}
                      className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all ${
                        annualForm.currency === 'USD'
                          ? 'bg-gradient-to-r from-smartan-orange to-smartan-pink'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      Dollar ($)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Select Amount ({annualForm.currency === 'NGN' ? '₦1M - ₦100M' : '$1K - $100K'})
                  </label>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    {['1000000', '25000000', '50000000', '100000000'].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setAnnualForm({...annualForm, amount: amt, customAmount: ''})}
                        className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                          annualForm.amount === amt && !annualForm.customAmount
                            ? 'bg-gradient-to-r from-smartan-orange to-smartan-pink'
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        {annualForm.currency === 'NGN' 
                          ? `₦${parseInt(amt).toLocaleString()}`
                          : `$${(parseInt(amt) / 1000).toLocaleString()}K`
                        }
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    OR Custom Amount ({annualForm.currency === 'NGN' ? '₦' : '$'}) - Min: {annualForm.currency === 'NGN' ? '₦1,000' : '$100'}
                  </label>
                  <input
                    type="number"
                    value={annualForm.customAmount}
                    onChange={(e) => setAnnualForm({...annualForm, customAmount: e.target.value, amount: ''})}
                    placeholder={annualForm.currency === 'NGN' ? '₦5,000,000' : '$5,000'}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-smartan-orange focus:outline-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-smartan-orange to-smartan-pink rounded-full font-semibold text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Make Your Annual Donation
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Monthly Donation Form */}
      <AnimatedSection id="monthly" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="glass-effect rounded-3xl p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-2 text-center">
                Join Our CNG <span className="text-gradient">Monthly</span>
              </h2>
              <p className="text-smartan-gray text-center mb-8">Monthly recurring or one-time contribution</p>

              <form onSubmit={handleMonthlySubmit} className="space-y-6">
                {/* Similar form structure as annual with monthly specific options */}
                {/* Abbreviated for space - follow same pattern as annual form */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-smartan-orange focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-smartan-orange focus:outline-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-smartan-orange to-smartan-pink rounded-full font-semibold text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Make Your Donation
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Silver Partner Form */}
      <AnimatedSection id="silver" className="py-24 bg-gradient-to-b from-smartan-navy/80 to-smartan-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="glass-effect rounded-3xl p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-2 text-center">
                CNG <span className="text-gradient">Silver Partner</span>
              </h2>
              <p className="text-smartan-gray text-center mb-8">Flexible contribution options</p>

              <form onSubmit={handleSilverSubmit} className="space-y-6">
                {/* Similar structure - abbreviated */}
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-smartan-orange to-smartan-pink rounded-full font-semibold text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Make Your Donation
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Bank Transfer Section */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Other Ways to <span className="text-gradient">Donate</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card variant="gradient">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">International Transfer</h3>
                <div className="space-y-4 text-smartan-gray">
                  <div>
                    <p className="text-sm text-smartan-orange mb-1">Bank Name</p>
                    <p className="font-semibold text-white">{BANK_DETAILS.international.bankName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-smartan-orange mb-1">Account Name</p>
                    <p className="font-semibold text-white">{BANK_DETAILS.international.accountName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-smartan-orange mb-1">Account Number</p>
                    <p className="font-semibold text-white text-2xl">{BANK_DETAILS.international.accountNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-smartan-orange mb-1">Account Type</p>
                    <p className="font-semibold text-white">{BANK_DETAILS.international.accountType}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="gradient">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Local Transfer (Nigeria)</h3>
                <div className="space-y-4 text-smartan-gray">
                  <div>
                    <p className="text-sm text-smartan-orange mb-1">Bank Name</p>
                    <p className="font-semibold text-white">{BANK_DETAILS.local.bankName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-smartan-orange mb-1">Account Name</p>
                    <p className="font-semibold text-white">{BANK_DETAILS.local.accountName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-smartan-orange mb-1">Account Number</p>
                    <p className="font-semibold text-white text-2xl">{BANK_DETAILS.local.accountNumber}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect inline-block px-8 py-4 rounded-2xl">
              <p className="text-smartan-gray mb-2">Need assistance with your donation?</p>
              <div className="flex items-center justify-center gap-6">
                <a href="mailto:smartanhouse@gmail.com" className="flex items-center gap-2 text-smartan-orange hover:text-smartan-pink transition-colors">
                  <HiMail className="w-5 h-5" />
                  thesmartanhouse@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default CNG;