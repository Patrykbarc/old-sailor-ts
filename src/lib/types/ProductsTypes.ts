import { ProductDetails } from './ProductDetailsTypes'
import { VariantNode } from './VariantNodeTypes'
import { Edge } from './singleTypes/EdgeType'
import { ImageNode } from './singleTypes/ImageNodeType'

export type ProductsNode = ProductDetails & {
  variants: {
    edges: Edge<VariantNode>[]
  }
  images: {
    edges: Edge<ImageNode>[]
  }
}

export type ProductsTypes = {
  node: ProductsNode
}
