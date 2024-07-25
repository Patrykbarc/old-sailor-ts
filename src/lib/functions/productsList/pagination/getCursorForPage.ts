import { allProductsQuery } from '@/lib/shopify/queries/allProductsQuery'
import client from '@/lib/shopify/shopifyApi'
import { AllProductEdge } from '@/lib/types/AllProductsEdges';

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
    const { data } = await client.request(allProductsQuery, variables)

    const products = data.collection.products.edges.filter(
      (edge: AllProductEdge) => edge.node.availableForSale
    )

    if (products.length === 0) {
      return null
    }

    cursor = products[products.length - 1].cursor
  }

  return cursor
}
