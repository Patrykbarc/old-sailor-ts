import { AOSWrapper } from '@/components/ui/AOS/AOSWrapper/AOSWrapper'
import { logShopifyErrors } from '@/lib/functions/helpers/logShopifyErrors'
import { bestsellersQuery } from '@/lib/shopify/queries/bestsellersQuery'
import client from '@/lib/shopify/shopifyApi'
import { AllProductEdge } from '@/lib/types/AllProductsEdges'
import { ProductsListDescription } from '../../Products/ProductsListDescription/ProductsListDescription'
import { ProductsListImage } from '../../Products/ProductsListImage/ProductsListImage'

export async function BestsellersList() {
  const { data, errors } = await client.request(bestsellersQuery)
  logShopifyErrors(errors)

  const bestsellersList = data.collection.products.edges

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {bestsellersList.map((product: AllProductEdge) => {
        const productId = product.node.id
        const productHandle = product.node.handle
        const productTitle = product.node.title
        const productPrice = product.node.variants.edges[0].node.price.amount
        const productCurrency =
          product.node.variants.edges[0].node.price.currencyCode
        const productImgSrc = product.node.images.edges[0].node.url
        const productImgAlt = product.node.images.edges[0].node.altText

        return (
          <AOSWrapper animation="fade-up">
            <div key={productId} className="group relative">
              <ProductsListImage
                productImgSrc={productImgSrc}
                productImgAlt={productImgAlt}
              />
              <ProductsListDescription
                productHandle={productHandle}
                productTitle={productTitle}
                productPrice={{
                  amount: productPrice,
                  currencyCode: productCurrency,
                }}
              />
            </div>
          </AOSWrapper>
        )
      })}
    </div>
  )
}
