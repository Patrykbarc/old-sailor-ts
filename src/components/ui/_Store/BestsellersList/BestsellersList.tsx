import { getShopifyData } from '@/lib/functions/getShopifyData'
import { bestsellersQuery } from '@/lib/queries/bestsellersQuery'
import { BestsellersTypes } from '@/lib/types/BestsellersTypes'
import { BestsellersListDescription } from './BestsellersListDescription/BestsellersListDescription'
import { BestsellersListImage } from './BestsellersListImage/BestsellersListImage'

export async function BestsellersList() {
  const bestsellersResponse = await getShopifyData(bestsellersQuery)
  const bestsellersList = bestsellersResponse.collection.products.edges

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {bestsellersList.map((product: BestsellersTypes) => {
        const productHandle = product.node.handle
        const productTitle = product.node.title
        const productPrice = product.node.variants.edges[0].node.price
        const productTags = product.node.tags.join(', ')
        const productImgSrc = product.node.images.edges[0].node.transformedSrc
        const productImgAlt = product.node.images.edges[0].node.altText

        return (
          <div key={productHandle} className="group relative">
            <BestsellersListImage
              productImgSrc={productImgSrc}
              productImgAlt={productImgAlt}
            />
            <BestsellersListDescription
              productHandle={productHandle}
              productTitle={productTitle}
              productTags={productTags}
              productPrice={productPrice}
            />
          </div>
        )
      })}
    </div>
  )
}
