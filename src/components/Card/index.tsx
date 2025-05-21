import { Container, Tags, Price, Order, ControlCard } from "./styles";
import { ItemQuantity } from "../ItemQuantity/index"
import { ShoppingCart } from "@phosphor-icons/react"
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartProvider";

interface CoffeeProps {
 coffee: {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
 }
}

export function Card({ coffee }: CoffeeProps) {
 const { addItem } = useContext(CartContext)
 const [quantity, setQuantity] = useState(1)

 function handleAddItem() {
  const item = {
   id: coffee.id,
   name: coffee.title,
   quantity,
   price: coffee.price
  }
  addItem(item)
 }

 function decrementQuantity() {
  if (quantity > 1) {
   setQuantity((state) => state - 1)
  }
 }

 function handleIncrement() {
  setQuantity(prev => prev + 1)
 }

 return(
  <Container>
   <img src={coffee.image} alt={`Imagen do café: ${coffee.title}`}/>
  
   <Tags>
    {coffee.tags.map((tag) => (
     <span key={tag}>{tag}</span>
    ))}
   </Tags>

   <h1>{coffee.title}</h1>

   <p>{coffee.description}</p>

   <ControlCard>
    <Price>
     <span>R$</span>
     <span>{coffee.price.toFixed(2)}</span>
    </Price>
    <Order>
     <ItemQuantity 
      quantity={quantity}
      onIncrement={handleIncrement}
      onDecrement={decrementQuantity}
     />
     <button onClick={handleAddItem}>
      <ShoppingCart size={22} weight="fill"/>
     </button>
    </Order>
   </ControlCard>
  </Container>
 )
}