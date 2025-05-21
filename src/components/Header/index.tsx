import { Container, Aside, Cart } from "./styles"
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartProvider";

export function Header() {
 const { cart } = useContext(CartContext)

 return(
  <Container>
   <Link to="/">
    <img src="/public/Logo-Coffee-Delivery.svg" alt="Logo Coffe Delivery" />
   </Link>
  
   <Aside>
    <div>
     <MapPin size={22} weight="fill" />
     <span>Porto Alegre, RS</span>
    </div>

    <Link to="/checkout">
    <Cart> 
     <ShoppingCart size={22} weight="fill"/>
     {cart.length > 0 ? <span>{cart.length}</span> : null}
    </Cart>
    </Link>

   </Aside>
  </Container>
 )
}
