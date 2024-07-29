export const productInStockQuery = `
query ProductVariantStock($variantId: ID!) {
  node(id: $variantId) {
    ... on ProductVariant {
      id
      quantityAvailable
    }
  }
}
`
