import { Container, Content, Heading, Info } from "./styles"
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export function Home() {
 return(
  <Container>
   <Content>
    <div>
     <Heading>
      <h1>Encontre o café perfeito para qualquer hora do dia
      </h1>
      <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
     </Heading>

     <Info>
      <div>
        <div className="icon-wrapper yellow-dark">
          <ShoppingCart weight="fill" size={16} />
        </div>
        <span>Compra simples e segura</span>
      </div>

       <div>
          <div className="icon-wrapper base-text">
            <Package weight="fill" size={16} />
          </div>
          <span>Entrega mantém o café intacto</span>
        </div>
       <div>
        
       <div className="icon-wrapper yellow">
         <Timer weight="fill" size={16} />
        </div>
         <span>Entrega rápida e rastreada</span>
       </div>

       <div>
         <div className="icon-wrapper purple">
           <Coffee weight="fill" size={16} />
         </div>
         <span>O café chega fresquinho até você</span>
       </div>
     </Info>

    </div>

    <img src="/img/coffee.svg" alt="img de um copo flutuando no background"/>
   </Content>
  </Container>
 )
}