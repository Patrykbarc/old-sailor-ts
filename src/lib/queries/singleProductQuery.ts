export const singleProductQuery = `
query SingleProduct($handle: String!) {
  productByHandle(handle: $handle) {
    id
    title
    description
    tags
    variants(first: 100) {
      edges {
        node {
          availableForSale
          selectedOptions {
            name
            value
          }
          id
          price {
            amount
            currencyCode  
          }
          sku
          title
          image {
            url(transform: {maxWidth: 400, maxHeight: 400})
            altText
          }
        }
      }
    }
    images(first: 4) {
      edges {
        node {
          url(transform: {maxWidth: 400, maxHeight: 400})
          altText
        }
      }
    }
  }
}
`
