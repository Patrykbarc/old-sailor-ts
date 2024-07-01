import { productsListQuery } from '@/lib/queries/productsListQuery'
import { getShopifyData } from '../../getShopifyData'

export async function getCursorForPage(
  page: number,
  id: string
): Promise<string | null> {
  let cursor = null

  for (let i = 1; i < page; i++) {
    const variables = { cursor, id }
    const response = await getShopifyData(productsListQuery, variables)
    
    const products = response.collection.products.edges
    cursor = products[products.length - 1].cursor
  }

  return cursor
}
