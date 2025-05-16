import { Container, Tags, Price, Order, ControlCard } from "./styles";
import { ItemQuantity } from "../ItemQuantity/index"
import { ShoppingCart } from "@phosphor-icons/react"

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
 const quatity = 1

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
     <ItemQuantity quantity={quatity}/>
     <button>
      <ShoppingCart size={22} weight="fill"/>
     </button>
    </Order>
   </ControlCard>
  </Container>
 )
}