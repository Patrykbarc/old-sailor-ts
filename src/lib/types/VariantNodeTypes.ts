export type VariantNode = {
  title: string
  price: {
    amount: string
    currencyCode: string
  }
  selectedOptions: {
    name: string
    value: string
  }[]
}
