export const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

// Convert amount to kobo (Paystack uses smallest currency unit)
export const amountToKobo = (amount) => {
  return Math.round(parseFloat(amount) * 100);
};

// Format currency display
export const formatCurrency = (amount, currency = 'NGN') => {
  const symbol = currency === 'NGN' ? '₦' : '$';
  return `${symbol}${parseFloat(amount).toLocaleString()}`;
};

// Generate unique payment reference
export const generateReference = (prefix = 'PAY') => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};