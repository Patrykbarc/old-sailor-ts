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

  return (
    <CartProductsWrapper className={className}>
      {!isCartEmpty &&
        cartContent.map((product) => {
          return (
            <li key={product.id} className="flex py-6">
              <Link href={product.href}>
                <CartProductImage images={product.images} />
              </Link>
              <div className="ml-4 flex flex-1 flex-col">
                <CartProductInfo
                  href={product.href}
                  title={product.title}
                  price={product.variants.edges[0].node.price.amount}
                  currency={product.variants.edges[0].node.price.currencyCode}
                />
                <CartProductActions
                  productId={product.id}
                  quantity={product.quantity}
                />
              </div>
            </li>
          )
        })}
    </CartProductsWrapper>
  )
}
