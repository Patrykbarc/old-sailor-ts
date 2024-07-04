import { getShopifyData } from '@/lib/functions/getShopifyData'
import { bestsellersQuery } from '@/lib/queries/bestsellersQuery'
import { ProductsTypes } from '@/lib/types/ProductsTypes'
import { ProductsListDescription } from '../../Products/ProductsListDescription/ProductsListDescription'
import { ProductsListImage } from '../../Products/ProductsListImage/ProductsListImage'

export async function BestsellersList() {
  const bestsellersResponse = await getShopifyData(bestsellersQuery)

  const bestsellersList = bestsellersResponse.collection.products.edges

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {bestsellersList.map((product: ProductsTypes) => {
        const productId = product.node.id
        const productHandle = product.node.handle
        const productTitle = product.node.title
        const productPrice = product.node.variants.edges[0].node.price
        const productImgSrc = product.node.images.edges[0].node.url
        const productImgAlt = product.node.images.edges[0].node.altText

        return (
          <div key={productId} className="group relative">
            <ProductsListImage
              productImgSrc={productImgSrc}
              productImgAlt={productImgAlt}
            />
            <ProductsListDescription
              productHandle={productHandle}
              productTitle={productTitle}
              productPrice={productPrice}
            />
          </div>
        )
      })}
    </div>
  )
}
