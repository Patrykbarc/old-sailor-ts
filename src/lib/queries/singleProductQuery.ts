export const singleProductQuery = () => {
  return `
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
          images(first: 4) {
            edges {
              node {
                url(transform: {maxWidth: 800, maxHeight: 800})
                altText
              }
            }
          }
        }
      }
    `
}
