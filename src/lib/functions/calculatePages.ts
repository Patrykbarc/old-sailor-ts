const PRODUCTS_PER_AGE = 16

export function calculateTotalPages(products: number) {
  return Math.ceil(products / PRODUCTS_PER_AGE)
}
