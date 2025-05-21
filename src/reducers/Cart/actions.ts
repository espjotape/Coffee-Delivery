
export interface CartItem {
  id: string
  name: string
  quantity: number
  price: number
}

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  // REMOVE_ITEM = 'REMOVE_ITEM',
  // CLEAR_CART = 'CLEAR_CART',
}

export function addItemAction(item: CartItem) {
 return {
  type: ActionTypes.ADD_ITEM,
  payload: {
    item
  }
 } as const
}

export type CartAction = 
  | ReturnType<typeof addItemAction>