import client from '@/lib/shopifyApi'
import { calculateTotalPages } from '../calculatePages'
import { getCursorForPage } from './pagination/getCursorForPage'
import { getProductListLength } from './pagination/getProductListLength'

export async function getProductsListAndTotalPages(
  searchParams: { page?: string },
  query: string,
  id: string
) {
  const page = parseInt(searchParams.page || '1', 10)
  const cursor = page > 1 ? await getCursorForPage(page, id) : null
  const variables = { variables: { cursor, id } }

  const { data } = await client.request(query, variables)

  const hasNextPage = data.collection.products.pageInfo.hasNextPage
  const hasPreviousPage = data.collection.products.pageInfo.hasPreviousPage

  const productsCount = await getProductListLength(query, id)
  const totalPages = calculateTotalPages(productsCount)

  return { data, totalPages, hasNextPage, hasPreviousPage, page }
}
