export type Variants = {
  edges: Array<{
    node: {
      id: string
      availableForSale: boolean
      title: string
      selectedOptions: Array<{ name: string; value: string }>
      image?: { url: any; altText?: string | null } | null
    }
  }>
}
