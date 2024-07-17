export const createCheckoutMutation = `
  mutation CreateCheckout($lineItems: [CheckoutLineItemInput!]!) {
    checkoutCreate(input: { lineItems: $lineItems }) {
      checkout {
        id
        webUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`
