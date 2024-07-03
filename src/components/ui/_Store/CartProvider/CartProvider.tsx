'use client'

import { CartContext, CartContextType } from '@/lib/contexts/CartContext'
import { CartTypes } from '@/lib/types/CartTypes'
import { ReactNode, useState } from 'react'

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartContent, setCartContent] = useState<CartTypes[]>([])

  const value: CartContextType = {
    cartContent,
    setCartContent,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
