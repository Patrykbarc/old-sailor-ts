import client from '@/lib/shopify/shopifyApi'
import { AllProducts } from '../../../types/AllProductsTypes'
import { AllProductEdge } from '../../../types/AllProductsEdges'

type QueryVariables = {
  variables: { cursor: string | null; id: string }
}

export const getProductListLength = async (query: string, id: string) => {
  let allProducts: AllProducts[] = []
  let hasNextPage = true
  let cursor = null

  while (hasNextPage) {
    const variables: QueryVariables = { variables: { cursor, id } }
    const { data } = await client.request(query, variables)

    if (data && data.collection) {
      const products = data.collection.products.edges

      allProducts = allProducts.concat(
        products.map((edge: AllProductEdge) => edge.node)
      )

      hasNextPage = data.collection.products.pageInfo.hasNextPage

      if (hasNextPage) {
        cursor = products[products.length - 1].cursor
      } else {
        cursor = null
      }
    } else {
      console.error('Invalid response structure or no products found.')
      hasNextPage = false
    }
  }

  return allProducts.length
}
