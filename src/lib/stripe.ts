import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error('Stripe secret key is not defined');
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 'Ignite Shop',
  },
});

// appInfo/name: pra todas as chamadas feitas no Stripe ficarem com
// um log e aparecer o nome da aplicação que fez a requisição.