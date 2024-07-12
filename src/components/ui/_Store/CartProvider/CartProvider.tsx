'use client'

import { CartContext, CartContextType } from '@/lib/contexts/CartContext'
import { CartTypes } from '@/lib/types/CartTypes'
import { ReactNode, useEffect, useState } from 'react'

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartContent, setCartContent] = useState<CartTypes[]>([])

  const storedCart = localStorage.getItem('cart')

  useEffect(() => {
    if (storedCart) {
      setCartContent(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartContent))
  }, [cartContent])

  function updateQuantity(productId: string, quantity: number) {
    setCartContent((prevCartContent) =>
      prevCartContent.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    )
  }

  const value: CartContextType = {
    cartContent,
    setCartContent,
    updateQuantity,
    isCartEmpty: cartContent.length === 0,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
