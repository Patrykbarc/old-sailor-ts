import { Dispatch, SetStateAction, createContext } from 'react'
import { CartTypes } from '../types/CartTypes'

export type CartContextType = {
  cartContent: CartTypes[]
  setCartContent: Dispatch<SetStateAction<CartTypes[]>>
  addToCart: (merchandiseId: string, quantity: number, href: string) => void
  updateQuantity: (merchandiseId: string, quantity: number) => void
  isCartEmpty: boolean
}

export const CartContext = createContext<CartContextType>({
  cartContent: [],
  setCartContent: () => {},
  addToCart: () => {},
  updateQuantity: () => {},
  isCartEmpty: false,
})
