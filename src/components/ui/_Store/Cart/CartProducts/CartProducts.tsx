import { useCart } from '@/lib/customHooks/useCart'
import Link from 'next/link'
import { CartProductActions } from './CartProductActions/CartProductActions'
import { CartProductImage } from './CartProductImage/CartProductImage'
import { CartProductInfo } from './CartProductInfo/CartProductInfo'
import { CartProductsWrapper } from './CartProductsWrapper/CartProductsWrapper'

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

        return (
          <li key={variantId} className="flex py-6">
            <Link href={href}>
              <CartProductImage images={images} />
            </Link>
            <div className="ml-4 flex flex-1 flex-col">
              <CartProductInfo
                href={href}
                title={title}
                price={+price}
                currency={currencyCode}
              />
              <CartProductActions lineId={lineId} quantity={quantity} />
            </div>
          </li>
        )
      })}
    </CartProductsWrapper>
  )
}
