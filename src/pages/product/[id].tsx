import Image from "next/image"
import Head from "next/head"
import { GetStaticPaths, GetStaticProps } from "next"

import { useState } from "react"

import { ProductContainer, ImageContainer, ProductDetails } from "../../styles/pages/product"

import Stripe from "stripe"
import { stripe } from "@/lib/stripe"

import axios from "axios"

interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    defaultPriceId: string,
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data
      
      // como Stripe é uma aplicação externa:
      window.location.href = checkoutUrl
      
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout! :( ')
    }
  }

  return(
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480}/>
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession} >Comprar agora</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [
      { params: { id: 'prod_PBKUDrCUUKyENT' } },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Caso o params seja undefined ou params.id não seja uma string
  if (!params || typeof params.id !== 'string') {
    return {
      notFound: true,
    }
  }

  const productId = String(params.id)

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  let productData;

  // Caso o unit_amount seja null:
  if (price.unit_amount === null) {
    productData = {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: 'N/A',
    };
  } else {
    productData = {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      description: product.description,
      defaultPriceId: price.id,
    };
  }

  return {
    props: {
      product: productData,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
