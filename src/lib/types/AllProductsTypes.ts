import { AllProductEdge } from './singleTypes/AllProductsEdgesType'

export type AllProducts = {
  products: {
    edges: AllProductEdge
    pageInfo: { hasNextPage: boolean }
  }
}
