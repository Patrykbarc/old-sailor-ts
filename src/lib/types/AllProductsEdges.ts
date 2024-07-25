export type AllProductEdge = {
  cursor: string
  node: {
    id: string
    title: string
    handle: string
    description: string
    availableForSale: boolean
    images: {
      edges: Array<{ node: { url: any; altText?: string | null } }>
    }
    variants: {
      edges: Array<{
        node: {
          price: any
          availableForSale: boolean
          quantityAvailable: number
        }
      }>
    }
  }
}
