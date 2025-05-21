import { createContext, useEffect, useReducer } from "react"
import { addItemAction, decrementItemQuantityAction, incrementItemQuantityAction, type CartItem } from "../reducers/Cart/actions"
import { cartReducer } from "../reducers/Cart/reducer"

interface CartContextProviderProps {
 children: React.ReactNode
}

interface CartContextType {
 cart: CartItem[]
 addItem: (item: CartItem) => void
 incrementItemQuantity: (itemId: string) => void
 decrementItemQuantity: (itemId: string) => void
}

export const CartContext = createContext({} as CartContextType)
 
export function CartContextProvider({children} : CartContextProviderProps) {
 const [cartState, dispatch] = useReducer(
  cartReducer,
  { cart: [] },
  () => {
   const storedState = localStorage.getItem("coffee-delivery:cart-state-1.0.0")
   if (storedState) {
    return JSON.parse(storedState)
   }
   return { cart: []}
  }
 )

 useEffect(() => {
  localStorage.setItem(
   '@coffee-delivery:cart-state-1.0.0',
   JSON.stringify(cartState)
  )
 }, [cartState])
 
 function addItem(item: CartItem) {
  dispatch(addItemAction(item))
 }

 function incrementItemQuantity(itemId: string) {
   dispatch(incrementItemQuantityAction(itemId))
 }

 function decrementItemQuantity(itemId: string) {
   dispatch(decrementItemQuantityAction(itemId))
 } 

 return(
  <CartContext.Provider 
   value={{
    cart: cartState.cart,
    addItem,
    incrementItemQuantity,
    decrementItemQuantity
   }}
   >
   {children}
  </CartContext.Provider>
 )
}