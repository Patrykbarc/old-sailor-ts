import { CartTypes } from '../types/CartTypes'

export function calculateTotalOrderValue(cartContent: CartTypes[]) {
  const total = cartContent.lines.edges.reduce((acc, product) => {
    const amount = Number(product.merchandise.priceV2.amount)
    const quantity = product.quantity

    return acc + amount * quantity
  }, 0)
  return total
}
