export type BestsellersTypes = {
  node: {
    handle: string
    title: string
    description: string
    productType: string
    tags: Array<string>
    variants: {
      edges: Array<{
        node: {
          title: string
          price: any
          selectedOptions: Array<{ name: string; value: string }>
        }
      }>
    }
    images: {
      edges: Array<{
        node: { transformedSrc: any; altText?: string | null }
      }>
    }
  }
}
