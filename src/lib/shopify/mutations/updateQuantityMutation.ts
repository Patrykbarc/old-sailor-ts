export const updateQuantityMutation = `
mutation updateQuantity($cartId: ID!, $lineId: ID!, $quantity: Int!) {
  cartLinesUpdate(cartId: $cartId, lines: [{id: $lineId, quantity: $quantity}]) {
    cart {
      id
      lines(first: 10) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
                product {
                  title
                  images(first: 10) {
                    edges {
                      node {
                        id
                        src
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`
