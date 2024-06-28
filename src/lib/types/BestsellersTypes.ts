export type ProductDetails = {
  handle: string
  title: string
  description: string
  productType: string
  tags: string[]
}

export type VariantNode = {
  title: string
  price: any
  selectedOptions: {
    name: string
    value: string
  }[]
}

export type ImageNode = {
  url: string
  altText?: string | null
}

type Edge<T> = {
  node: T
}

type BestsellersNode = ProductDetails & {
  variants: {
    edges: Edge<VariantNode>[]
  }
  images: {
    edges: Edge<ImageNode>[]
  }
}

export type BestsellersTypes = {
  node: BestsellersNode
}
