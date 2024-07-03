'use client'

import { CartContext } from '@/lib/contexts/CartContext'
import { CartTypes } from '@/lib/types/CartTypes'
import { ReactNode, useState } from 'react'

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartContent, setCartContent] = useState<CartTypes[]>([])

  return (
    <CartContext.Provider value={{ cartContent, setCartContent }}>
      {children}
    </CartContext.Provider>
  )
}
