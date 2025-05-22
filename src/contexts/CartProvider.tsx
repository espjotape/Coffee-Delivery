import { createContext, useEffect, useReducer } from "react"
import { addItemAction, checkoutAction, decrementItemQuantityAction, incrementItemQuantityAction, removeItemCartAction, type CartItem } from "../reducers/Cart/actions"
import { cartReducer } from "../reducers/Cart/reducer"
import type { OrderInfo } from "../pages/Checkout"
import { useNavigate } from "react-router-dom"

interface CartContextProviderProps {
 children: React.ReactNode
}

interface CartContextType {
 cart: CartItem[]
 order: OrderInfo | null
 addItem: (item: CartItem) => void
 removeItem: (itemId: CartItem['id']) => void
 incrementItemQuantity: (itemId: string) => void
 decrementItemQuantity: (itemId: string) => void
 checkout: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextType)
 
export function CartContextProvider({children} : CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
  cartReducer,
  { cart: [], order: [] },
  () => {
   const storedState = localStorage.getItem("coffee-delivery:cart-state-1.0.0")
   if (storedState) {
    return JSON.parse(storedState)
   }
   return { cart: [], order: []}
  }
 )

 const { cart, order } = cartState
 
 function addItem(item: CartItem) {
  dispatch(addItemAction(item))
 }

 function removeItem(itemId: CartItem['id']) {
  dispatch(removeItemCartAction(itemId))
 }

 function incrementItemQuantity(itemId: string) {
   dispatch(incrementItemQuantityAction(itemId))
 }

 function decrementItemQuantity(itemId: string) {
   dispatch(decrementItemQuantityAction(itemId))
 }

 const navigate = useNavigate()

 function checkout(order: OrderInfo){
  dispatch(checkoutAction(order))
  const orderId = Date.now()
  navigate(`/order/${orderId}/success`)
 }

  useEffect(() => {
  localStorage.setItem(
   '@coffee-delivery:cart-state-1.0.0',
   JSON.stringify(cartState)
  )
 }, [cartState])

 return(
  <CartContext.Provider 
   value={{
    cart,
    order,
    addItem,
    removeItem,
    incrementItemQuantity,
    decrementItemQuantity,
    checkout
   }}
   >
   {children}
  </CartContext.Provider>
 )
}