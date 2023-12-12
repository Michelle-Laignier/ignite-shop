import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

import shirt1 from "../../src/assets/camisetas/shirt1.png"
import shirt2 from "../../src/assets/camisetas/shirt2.png"
import shirt3 from "../../src/assets/camisetas/shirt3.png"
import shirt4 from "../../src/assets/camisetas/shirt4.png"

export default function Home() {
  return(
    <HomeContainer>
      <Product>
        <Image src={shirt1} alt="" width={520} height={480}/>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={shirt4} alt="" width={520} height={480}/>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}