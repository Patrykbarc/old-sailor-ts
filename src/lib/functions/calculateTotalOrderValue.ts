import { CartTypes } from '../types/CartTypes'

export function calculateTotalOrderValue(cartContent: CartTypes[]) {
  const total = cartContent.reduce((acc, product) => {
    const amount = Number(product.variants.edges[0].node.price.amount)
    const quantity = product.quantity

    return acc + amount * quantity
  }, 0)

  return total
}
