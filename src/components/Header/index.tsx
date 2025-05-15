import { useState } from "react";
import { Container, Aside, Cart } from "./styles"
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
 const [fakeCart] = useState([1,2,3]);

 return(
  <Container>
   <img src="/public/Logo-Coffee-Delivery.svg" alt="Logo Coffe Delivery" />
  
   <Aside>
    <div>
     <MapPin size={22} weight="fill" />
     <span>Porto Alegre, RS</span>
    </div>

    <Cart>
     <ShoppingCart size={22} weight="fill"/>
     {fakeCart.length > 0 ? <span>{fakeCart.length}</span> : null}
    </Cart>
   </Aside>
  </Container>
 )
}