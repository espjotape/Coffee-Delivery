import { produce } from "immer";
import { ActionTypes, type CartAction, type CartItem } from "./actions";

export interface CartState {
 cart: CartItem[]
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

   default:
    return state
 } 
}