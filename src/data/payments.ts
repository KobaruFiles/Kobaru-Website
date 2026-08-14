export interface PaymentLinks {
  mp: string;
  paypal: string;
  stripe: string;
  crypto: string;
}

// Substitua os links abaixo pelos seus links reais de checkout
export const productPayments: Record<string, PaymentLinks> = {
  'avatar-1': {
    mp:      'https://mpago.la/PLACEHOLDER',
    paypal:  'https://paypal.me/PLACEHOLDER',
    stripe:  'https://buy.stripe.com/PLACEHOLDER',
    crypto:  'https://nowpayments.io/payment/?iid=PLACEHOLDER',
  },
  'avatar-2': {
    mp:      'https://mpago.la/PLACEHOLDER',
    paypal:  'https://paypal.me/PLACEHOLDER',
    stripe:  'https://buy.stripe.com/PLACEHOLDER',
    crypto:  'https://nowpayments.io/payment/?iid=PLACEHOLDER',
  },
  'avatar-3': {
    mp:      'https://mpago.la/PLACEHOLDER',
    paypal:  'https://paypal.me/PLACEHOLDER',
    stripe:  'https://buy.stripe.com/PLACEHOLDER',
    crypto:  'https://nowpayments.io/payment/?iid=PLACEHOLDER',
  },
};

export const consultoriaPayments: PaymentLinks = {
  mp:      'https://mpago.la/PLACEHOLDER_PRIORITY',
  paypal:  'https://paypal.me/PLACEHOLDER_PRIORITY',
  stripe:  'https://buy.stripe.com/PLACEHOLDER_PRIORITY',
  crypto:  'https://nowpayments.io/payment/?iid=PLACEHOLDER_PRIORITY',
};

export const DISCORD_URL = 'https://discord.gg/PLACEHOLDER';
