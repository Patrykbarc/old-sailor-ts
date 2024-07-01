export const allProductsQuery = `
query GetAllProducts($cursor: String) {
  products(first: 50, after: $cursor) {
    edges {
      node {
        id
        title
        handle
        description
        images(first: 1) {
          edges {
            node {
              url(transform: {maxWidth: 400, maxHeight: 400})
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              availableForSale
            }
          }
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
    }
  }
}
`
