import { useCart } from '@/lib/customHooks/useCart'
import { RemoveCartItem } from '../RemoveCartItem/RemoveCartItem'
import { CartProductImage } from './CartProductImage/CartProductImage'
import { CartProductPrice } from './CartProductPrice/CartProductPrice'
import { CartProductQuantity } from './CartProductQuantity/CartProductQuantity'
import { CartProductsWrapper } from './CartProductsWrapper/CartProductsWrapper'
import { CartProductTitle } from './CartProductTitle/CartProductTitle'

type CartProductsProps = {
  className?: string
}

export function CartProducts({ className }: CartProductsProps) {
  const { cartContent, isCartEmpty } = useCart()

  const lines = cartContent?.lines || []

  if (!isCartEmpty && !lines) {
    return (
      <div className="text-neutral-500 mt-5">
        <h2>Oops... something went wrong.</h2>
        <h3 className="mt-1.5">Try refresh your browser.</h3>
      </div>
    )
  }

  return (
    <CartProductsWrapper className={className}>
      {cartContent.lines.edges.map((product) => {
        const productNode = product.merchandise
        const href = product.href
        const images = productNode.product?.images?.edges[0].node
        const title = productNode.product.title
        const price = productNode.priceV2.amount
        const currencyCode = productNode.priceV2.currencyCode
        const variantId = productNode.id
        const quantity = product.quantity
        const lineId = product.id
        const merchandiseId = productNode.id

        return (
          <li key={variantId} className="flex flex-col gap-2 py-6">
            <article className="flex flex-1 align-top gap-5">
              <CartProductImage
                images={images}
                href={href}
                quantity={quantity}
              />
              <CartProductTitle href={href} title={title} />
              <CartProductQuantity
                lineId={lineId}
                quantity={quantity}
                merchandiseId={merchandiseId}
              />
            </article>
            <section className="flex justify-between">
              <div className="flex justify-between w-full mt-1">
                <CartProductPrice price={+price} currencyCode={currencyCode} />
                <RemoveCartItem lineId={lineId} />
              </div>
            </section>
          </li>
        )
      })}
    </CartProductsWrapper>
  )
}
