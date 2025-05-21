import { createContext, use, useEffect, useReducer } from "react"
import { addItemAction, type CartItem } from "../reducers/Cart/actions"
import { cartReducer } from "../reducers/Cart/reducer"

interface CartContextProviderProps {
 children: React.ReactNode
}

interface CartContextType {
 cart: CartItem[]
 addItem: (item: CartItem) => void
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

 return(
  <CartContext.Provider 
   value={{
    cart: cartState.cart,
    addItem
   }}
   >
   {children}
  </CartContext.Provider>
 )
}