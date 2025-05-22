import type { OrderInfo } from "../../pages/Checkout"

export interface CartItem {
  id: string
  name: string
  quantity: number
  price: number
}

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT = 'CHECKOUT'
}

export function addItemAction(item: CartItem) {
 return {
  type: ActionTypes.ADD_ITEM,
  payload: {
    item
  }
 } as const
}

export function removeItemCartAction(itemId: CartItem['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId
    }
  } as const
}

export function incrementItemQuantityAction(itemId: string) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId
    }
  } as const
}

export function decrementItemQuantityAction(itemId: string) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId
    }
  } as const
}

export function checkoutAction(order: OrderInfo) {
  return {
    type: ActionTypes.CHECKOUT,
    payload: { order }
  } as const;
}

export type CartAction = 
  | ReturnType<typeof addItemAction>
  | ReturnType<typeof removeItemCartAction>
  | ReturnType<typeof incrementItemQuantityAction>
  | ReturnType<typeof decrementItemQuantityAction>
  | ReturnType<typeof checkoutAction>