import { calculateTotalPages } from '../calculatePages'
import { getShopifyData } from '../getShopifyData'
import { getCursorForPage } from './pagination/getCursorForPage'
import { getProductListLength } from './pagination/getProductListLength'

type Variables = {
  cursor: string | null
  id?: string
}

export async function getProductsListAndTotalPages(
  searchParams: { page?: string },
  query: string,
  id: string
) {
  const page = parseInt(searchParams.page || '1', 10)
  const cursor = page > 1 ? await getCursorForPage(page, id) : null
  const variables: Variables = { cursor, id }

  const productsList = await getShopifyData(query, variables)

  const hasNextPage = productsList.collection.products.pageInfo.hasNextPage
  const hasPreviousPage =
    productsList.collection.products.pageInfo.hasPreviousPage

  const productsCount = await getProductListLength(query, id)
  const totalPages = calculateTotalPages(productsCount)

  return { productsList, totalPages, hasNextPage, hasPreviousPage, page }
}
