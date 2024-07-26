export type Variants = {
  edges: Array<{
    node: {
      id: string
      availableForSale: boolean
      quantityAvailable: number
      title: string
      selectedOptions: Array<{ name: string; value: string }>
      image?: { url: any; altText?: string | null } | null
      price: {
        amount: string
        currencyCode: string
      }
    }
  }>
}
