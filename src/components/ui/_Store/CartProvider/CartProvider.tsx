'use client'

import {
  CartContext,
  CartContextType,
  CartId,
} from '@/lib/contexts/CartContext'
import { addToCartMutation } from '@/lib/shopify/mutations/addToCartMutation'
import { createCartMutation } from '@/lib/shopify/mutations/createCartMutation'
import client from '@/lib/shopify/shopifyApi'
import { CartTypes } from '@/lib/types/CartTypes'
import { ReactNode, useEffect, useState } from 'react'

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartContent, setCartContent] = useState<CartTypes[]>([])
  const [cartId, setCartId] = useState<CartId>(null)

  useEffect(() => {
    async function createCart() {
      try {
        const { data } = await client.request(createCartMutation)

        setCartId(data.cartCreate.cart.id)
        setCartContent(data.cartCreate)
      } catch (error) {
        console.error('Error creating cart:', error)
      }
    }

    createCart()
  }, [])

  useEffect(() => {
    if (cartId) {
      localStorage.setItem('cart', JSON.stringify(cartContent))
    }
  }, [cartContent, cartId])

  async function addToCart(variantId: string, quantity: number, href: string) {
    if (!cartId) return

    const variables = {
      cartId,
      lines: [{ merchandiseId: variantId, quantity }],
    }

    try {
      const { data } = await client.request(addToCartMutation, { variables })

      if (data && data.cartLinesAdd && data.cartLinesAdd.cart) {
        setCartContent((prevState) => ({
          ...prevState,
          cart: {
            ...prevState.cart,
            lines: {
              ...prevState.cart.lines,
              edges: [
                ...data.cartLinesAdd.cart.lines.edges.map((edge: any) => ({
                  ...edge.node,
                  href: href,
                  merchandiseId: edge.node.merchandise.id,
                })),
              ],
            },
          },
        }))
      } else {
        console.error('Unexpected API response structure:', data)
      }
    } catch (error) {
      console.error('Error adding to cart:', error)
    }
  }

  function updateQuantity(merchandiseId: string, quantity: number) {
    setCartContent((prevCartContent) =>
      prevCartContent.map((product) =>
        product.merchandiseId === merchandiseId
          ? { ...product, quantity }
          : product
      )
    )
  }

  const isCartEmpty = cartContent.cart?.lines?.edges.length === 0

  const value: CartContextType = {
    cartContent: cartContent.cart,
    setCartContent,
    cartId,
    addToCart,
    updateQuantity,
    isCartEmpty: isCartEmpty,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// {
//   "cart": {
//       "id": "gid://shopify/Cart/Z2NwLWV1cm9wZS13ZXN0MTowMUozODJLM1lKMkMxWFhSU04wTk0zRjRKOA?key=1c3d4e62f853df35593ba6cd25dffeb0",
//       "checkoutUrl": "https://old-sailor-barber-store.myshopify.com/cart/c/Z2NwLWV1cm9wZS13ZXN0MTowMUozODJLM1lKMkMxWFhSU04wTk0zRjRKOA?key=1c3d4e62f853df35593ba6cd25dffeb0",
//       "lines": {
//           "edges": []
//       }
//   }
// }
