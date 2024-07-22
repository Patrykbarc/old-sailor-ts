'use client'

import {
  CartContext,
  CartContextType,
  CartId,
} from '@/lib/contexts/CartContext'
import { addToCartMutation } from '@/lib/shopify/mutations/addToCartMutation'
import { createCartMutation } from '@/lib/shopify/mutations/createCartMutation'
import { updateQuantityMutation } from '@/lib/shopify/mutations/updateQuantityMutation'
import client from '@/lib/shopify/shopifyApi'
import { Cart } from '@/lib/types/cart/Cart'
import { ReactNode, useEffect, useState } from 'react'

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartContent, setCartContent] = useState<Cart>({
    id: '',
    checkoutUrl: '',
    lines: { edges: [] },
  })
  const [cartId, setCartId] = useState<CartId>(null)

  useEffect(() => {
    async function createCart() {
      try {
        const { data } = await client.request(createCartMutation)

        setCartId(data.cartCreate.cart.id)
        setCartContent(data.cartCreate.cart)
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

      console.log('Response from addToCartMutation:', data)

      if (data && data.cartLinesAdd && data.cartLinesAdd.cart) {
        const edges = data.cartLinesAdd.cart.lines.edges

        if (!Array.isArray(edges)) {
          console.error(
            'Unexpected API response structure: edges is not an array',
            edges
          )
          return
        }

        setCartContent((prevState) => {
          const updatedEdges = edges.map((edge: any) => {
            if (
              !edge.node ||
              !edge.node.merchandise ||
              !edge.node.merchandise.id
            ) {
              console.error('Invalid edge structure', edge)
              return edge
            }

            return {
              ...edge.node,
              href,
              merchandiseId: edge.node.merchandise.id,
            }
          })

          console.log('Updated edges:', updatedEdges)

          return {
            ...prevState,
            lines: {
              edges: updatedEdges,
            },
          }
        })
      } else {
        console.error('Unexpected API response structure:', data)
      }
    } catch (error) {
      console.error('Error adding to cart:', error)
    }
  }

  async function updateQuantity(lineId: string, quantity: number) {
    if (!cartId) return

    const variables = {
      cartId,
      lineId,
      quantity,
    }

    try {
      const { data } = await client.request(updateQuantityMutation, {
        variables,
      })

      if (data && data.cartLinesUpdate && data.cartLinesUpdate.cart) {
        setCartContent((prevState) => {
          const updatedEdges = prevState.lines.edges.map((edge) => {
            if (edge.id === lineId) {
              return {
                ...edge,
                quantity,
              }
            }
            return edge
          })

          return {
            ...prevState,
            lines: {
              edges: updatedEdges,
            },
          }
        })
      } else {
        console.error('Unexpected API response structure:', data)
      }
    } catch (error) {
      console.error('Error updating cart quantity:', error)
    }
  }

  const isCartEmpty = cartContent.lines.edges.length === 0

  const value: CartContextType = {
    cartContent,
    setCartContent,
    cartId,
    addToCart,
    updateQuantity,
    isCartEmpty,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
