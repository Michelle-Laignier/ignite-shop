import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 'Ignite Shop',
  }
})

// appInfo/name: pra todas as chamadas feitas no Stripe ficarem com
// um log e aparecer o nome da aplicação que fez a requisição.