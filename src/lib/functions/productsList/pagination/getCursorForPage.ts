import { productsListQuery } from '@/lib/queries/productsListQuery'
import client from '@/lib/shopifyApi'

type QueryVariables = {
  variables: { cursor: string | null; id: string }
}

export async function getCursorForPage(
  page: number,
  id: string
): Promise<string | null> {
  let cursor = null

  for (let i = 1; i < page; i++) {
    const variables: QueryVariables = { variables: { cursor, id } }
    const { data } = await client.request(productsListQuery, variables)

    const products = data.collection.products.edges
    cursor = products[products.length - 1].cursor
  }

  return cursor
}
