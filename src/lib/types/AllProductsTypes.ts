import { AllProductEdge } from './AllProductsEdges'

export type AllProducts = {
  products: {
    edges: AllProductEdge
    pageInfo: { hasNextPage: boolean }
  }
}
