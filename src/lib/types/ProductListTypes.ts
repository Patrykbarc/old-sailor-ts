interface ImageEdge {
  node: {
    transformedSrc: string
    altText: string
  }
}

interface Images {
  edges: ImageEdge[]
}

interface VariantEdge {
  node: {
    price: string
  }
}

interface Variants {
  edges: VariantEdge[]
}

export interface Data {
  handle: string
  title: string
  description: string
  productType: string
  tags: string[]
  variants: Variants
  images: Images
}
