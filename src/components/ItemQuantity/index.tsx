import { Container } from "./styles";
import { Minus, Plus } from '@phosphor-icons/react'

export function ItemQuantity({ quantity }: any) {
 
 return(
  <Container>
   <button>
    <Minus />
   </button>

   <span>{quantity}</span>
   
   <button>
    <Plus />
   </button>
  </Container>
 )
}