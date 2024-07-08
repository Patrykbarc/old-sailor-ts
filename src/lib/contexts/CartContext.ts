import { Dispatch, SetStateAction, createContext } from 'react'
import { Action } from '../customHooks/setProductsQuantityReducer/setProductsQuantityReducer'
import { CartTypes } from '../types/CartTypes'

export type CartContextType = {
  cartContent: CartTypes[]
  setCartContent: Dispatch<SetStateAction<CartTypes[]>>
  quantity: number
  setQuantity: Dispatch<Action>
  isCartEmpty: boolean
}

export const CartContext = createContext<CartContextType>({
  cartContent: [],
  setCartContent: () => {},
  quantity: 1,
  setQuantity: () => 1,
  isCartEmpty: false,
})
