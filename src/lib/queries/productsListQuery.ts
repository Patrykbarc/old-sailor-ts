export const productsListQuery = `
query Products {
  products(first: 8) {
    edges {
      node {
        handle
        title
        description
        productType
        tags
        variants(first: 1) {
          edges {
            node {
              title
              price
              selectedOptions {
                name
                value
              }
            }
          }
        }
        images(first: 1) {
          edges {
            node {
              transformedSrc
              altText
            }
          }
        }
      }
    }
  }
}
`
