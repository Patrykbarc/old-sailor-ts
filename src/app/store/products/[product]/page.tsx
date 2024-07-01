import { Product } from '@/components/views/Store/Product/Product'
import { getShopifyData } from '@/lib/functions/getShopifyData'
import { singleProductQuery } from '@/lib/queries/singleProductQuery'

type ProductProps = {
  params: { product: string }
}

export default async function Page({ params }: ProductProps) {
  const query = singleProductQuery
  const variables = { handle: params.product }

  const productDataResponse = await getShopifyData(query, variables)
  const singleProductData = productDataResponse.productByHandle

  return <Product productData={singleProductData} />
}
