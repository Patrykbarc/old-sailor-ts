import { BLUR_DATA_URL } from '@/lib/constants/blurDataUrl'
import { getShopifyData } from '@/lib/functions/getShopifyData'
import { bestsellersQuery } from '@/lib/queries/bestsellersQuery'
import { BestsellersTypes } from '@/lib/types/BestsellersTypes'
import Image from 'next/image'
import PLACEHOLDER from '/public/placeholder.jpg'

export async function Bestsellers() {
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
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <Image
                src={productImgSrc ?? PLACEHOLDER}
                alt={productImgAlt ?? 'Product placeholder'}
                width={400}
                height={400}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={`product/${productHandle}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {productTitle}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{productTags}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {productPrice} $
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
