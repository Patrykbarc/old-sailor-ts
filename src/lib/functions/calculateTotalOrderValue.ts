import { Cart } from '../types/cart/Cart'

export function calculateTotalOrderValue(cartContent: Cart) {
  const total = cartContent.lines.edges.reduce((acc, product) => {
    const amount = Number(product.merchandise.priceV2.amount)
    const quantity = product.quantity

    return acc + amount * quantity
  }, 0)
  return total
}
