import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { GetStaticProps } from "next"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { HomeContainer, Product } from "../styles/pages/home"

import Stripe from "stripe"
import { stripe } from "@/lib/stripe"

interface HomeProps {
  products: {
    id: string,
    name: string,
    imageUrl: string,
    price: string, // mais embaixo convertemos pra string
  }[]
}

export default function Home({ products }: HomeProps) {
  function slidesQuantity() {
    if(window.innerWidth <= 768) {
      return 1.2
    } else if (window.innerWidth <= 1024) {
      return 1.5
    } else {
      return 2.5
    }
  }

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: slidesQuantity,
      spacing: 48
    }
  })

  return(
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return(
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} alt="" width={520} height={480}/>

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    if (price.unit_amount === null) {
      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: 'N/A',
      }
    }

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      //price: price.unit_amount / 100,
      // Pra ficar com R$ na frente:
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })
  
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // gerar a página a cada 2 horas. 60s * 60 * 2
  }
}