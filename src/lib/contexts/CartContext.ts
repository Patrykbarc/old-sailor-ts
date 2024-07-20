import { Dispatch, SetStateAction, createContext } from 'react'
import { CartTypes } from '../types/CartTypes'

export type CartId = string | null

export type CartContextType = {
  cartContent: { cart: CartTypes[] }
  setCartContent: Dispatch<SetStateAction<CartTypes[]>>
  cartId: CartId
  addToCart: (merchandiseId: string, quantity: number, href: string) => void
  updateQuantity: (merchandiseId: string, quantity: number) => void
  isCartEmpty: boolean
}

const initFuncitonState = () => {}

export const CartContext = createContext<CartContextType>({
  cartContent: { cart: [] },
  setCartContent: initFuncitonState,
  cartId: null,
  addToCart: initFuncitonState,
  updateQuantity: initFuncitonState,
  isCartEmpty: false,
})
