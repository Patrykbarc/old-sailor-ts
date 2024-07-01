export const singleProductQuery = `
query SingleProduct($handle: String!) {
  productByHandle(handle: $handle) {
    title
    description
    tags
    priceRangeV2 {
      minVariantPrice {
        amount
      }
    }
    variants(first: 100) {
      edges {
        node {
          availableForSale
          selectedOptions {
            name
            value
          }
          price
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
