export const allProductsQuery = `
query AllProducts($id: ID!, $cursor: String) {
  collection(id: $id) {
    title
    products(first: 17, after: $cursor) {
      edges {
        cursor
        node {
          id
          handle
          title
          availableForSale
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
                quantityAvailable
                price
                {
                amount
                currencyCode  
                }
                availableForSale
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
}
`
