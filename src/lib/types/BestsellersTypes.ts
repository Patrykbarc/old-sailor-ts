import { ProductDetails } from './ProductDetailsTypes'
import { VariantNode } from './VariantNodeTypes'
import { Edge } from './singleTypes/EdgeType'
import { ImageNode } from './singleTypes/ImageNodeType'

export type BestsellersNode = ProductDetails & {
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
