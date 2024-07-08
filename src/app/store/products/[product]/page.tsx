import { Product } from '@/components/views/Store/Product/Product'
import { singleProductQuery } from '@/lib/queries/singleProductQuery'
import client from '@/lib/shopifyApi'

type ProductProps = {
  params: { product: string }
}

export default async function Page({ params }: ProductProps) {
  const variables = { variables: { handle: params.product } }

  const { data } = await client.request(singleProductQuery, variables)

  const singleProductData = data.productByHandle

  return <Product productData={singleProductData} />
}
