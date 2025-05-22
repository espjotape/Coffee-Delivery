import { produce } from "immer";
import { ActionTypes, type CartAction, type CartItem } from "./actions";
import type { OrderInfo } from "../../pages/Checkout";

export interface CartState {
 cart: CartItem[]
 order: OrderInfo | null
}

export function cartReducer(state: CartState, action: CartAction) {
 switch(action.type) {
  case ActionTypes.ADD_ITEM:
   return produce(state, (draft) => {
    const itemIndex = draft.cart.findIndex(
     (item) => item.id === action.payload.item.id
    )

    if (itemIndex >= 0) {
     draft.cart[itemIndex].quantity += action.payload.item.quantity
    }else {
     draft.cart.push(action.payload.item)
    }
   })

  case ActionTypes.REMOVE_ITEM:
   return produce(state, (draft) => {
      const itemToRemoveId = draft.cart.findIndex(
         (item) => item.id === action.payload.itemId,
      )
      draft.cart.splice(itemToRemoveId, 1)
   })

  case ActionTypes.INCREMENT_ITEM_QUANTITY: {
      const updatedCart = state.cart.map(item => 
         item.id === action.payload.itemId
         ? { ...item, quantity: item.quantity + 1}
         : item
      )
      return { ...state, cart: updatedCart }
   }

  case ActionTypes.DECREMENT_ITEM_QUANTITY: {
      const updatedCart = state.cart.map(item => 
         item.id === action.payload.itemId && item.quantity > 1
         ? { ...item, quantity: item.quantity - 1}
         : item
      )
      return { ...state, cart: updatedCart }
   }
  
  case ActionTypes.CHECKOUT: {
   return{
      ...state,
      cart: [],
      order: action.payload.order
   }
  }

   default:
    return state
 } 
}