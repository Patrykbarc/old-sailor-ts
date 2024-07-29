import { logShopifyErrors } from '@/lib/functions/helpers/logShopifyErrors'
import { bestsellersQuery } from '@/lib/shopify/queries/bestsellersQuery'
import client from '@/lib/shopify/shopifyApi'
import { ProductsList } from '../ProductsList/ProductsList'

export async function BestsellersList() {
  const { data, errors } = await client.request(bestsellersQuery)
  logShopifyErrors(errors)

  const bestsellersList = data.collection.products.edges

  return <ProductsList products={bestsellersList} />
}
