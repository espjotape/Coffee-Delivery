import { Container } from "./styles";
import { Minus, Plus } from '@phosphor-icons/react'

interface ItemQuantityProps {
 quantity: number;
 onIncrement: () => void;
 onDecrement: () => void;
}

export function ItemQuantity({ quantity, onIncrement, onDecrement }: ItemQuantityProps) {
 
 return(
  <Container>
   <button onClick={onDecrement}>
    <Minus />
   </button>

   <span>{quantity}</span>
   
   <button onClick={onIncrement}>
    <Plus />
   </button>
  </Container>
 )
}