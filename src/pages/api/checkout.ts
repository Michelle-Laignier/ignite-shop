// rota server-side:
// pra operações baseadas em ações do usuário, pelo lado do servidor (next)

import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body;

  if(req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed! '})
  }

  if(!priceId) {
    return res.status(400).json({ error: 'Price not found :( '})
  }

  // depois da compra efetuada, redirecionar pra página de sucesso:
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`
  
  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,

    mode: 'payment',

    // infos sobre quais produtos o user tá comprando
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ],
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
    // url que vamos redirecionar o usuário pra ele finalizar a compra
  })
}
