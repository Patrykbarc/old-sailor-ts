export const bestsellersQuery = `
query Bestsellers {
  collection(id: "gid://shopify/Collection/271713927239") {
    title
    products(first: 10) {
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
                url(transform: {maxWidth: 400, maxHeight: 400})
                altText
              }
            }
          }
        }
      }
    }
  }
}
`
