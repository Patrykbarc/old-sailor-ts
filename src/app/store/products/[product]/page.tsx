import { Product } from '@/components/views/Store/Product/Product'
import { productQuery } from '@/lib/shopify/queries/productQuery'
import client from '@/lib/shopify/shopifyApi'

type ProductProps = {
  params: { product: string }
}

export default async function Page({ params }: ProductProps) {
  const variables = { variables: { handle: params.product } }

  const { data } = await client.request(productQuery, variables)

  const singleProductData = data.productByHandle

  return <Product productData={singleProductData} />
}
