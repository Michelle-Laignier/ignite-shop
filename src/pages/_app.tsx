import { AppProps } from "next/app"
import Image from 'next/image'

import { globalStyles } from "../styles/global"
import { Container, Header } from "../styles/pages/app"

import logo from "../../src/assets/logo.svg"
import Link from "next/link"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Container>
      <Header>
        <Link href="/">
          <Image src={logo} alt="" priority={true}/>
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}