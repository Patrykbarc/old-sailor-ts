export type Variants = {
  edges: Array<{
    node: {
      availableForSale: boolean
      price: any
      sku?: string | null
      title: string
      selectedOptions: Array<{ name: string; value: string }>
      image?: { url: any; altText?: string | null } | null
    }
  }>
}
