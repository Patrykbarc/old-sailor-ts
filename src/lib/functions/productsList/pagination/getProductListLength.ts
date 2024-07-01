import { AllProducts } from '../../../types/AllProductsTypes'
import { AllProductEdge } from '../../../types/singleTypes/AllProductsEdgesType'
import { getShopifyData } from '../../getShopifyData'

export const getProductListLength = async (query: string, id: string) => {
  let allProducts: AllProducts[] = []
  let hasNextPage = true
  let cursor = null

  while (hasNextPage) {
    const variables = { cursor, id }
    const response = await getShopifyData(query, variables)

    if (response && response.collection) {
      const products = response.collection.products.edges

      allProducts = allProducts.concat(
        products.map((edge: AllProductEdge) => edge.node)
      )

      hasNextPage = response.collection.products.pageInfo.hasNextPage

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
