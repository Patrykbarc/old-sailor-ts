'use client'

import { CartContext, CartContextType } from '@/lib/contexts/CartContext'
import { setProductsQuantityReducer } from '@/lib/customHooks/setProductsQuantityReducer/setProductsQuantityReducer'
import { CartTypes } from '@/lib/types/CartTypes'
import { ReactNode, useReducer, useState } from 'react'

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartContent, setCartContent] = useState<CartTypes[]>([])
  const [state, dispatch] = useReducer(setProductsQuantityReducer, {
    quantity: 1,
  })

  const value: CartContextType = {
    cartContent,
    setCartContent,
    quantity: state.quantity,
    setQuantity: dispatch,
    isCartEmpty: cartContent.length === 0,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
