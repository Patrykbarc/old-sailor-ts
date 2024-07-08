import { CartContext } from '@/lib/contexts/CartContext'
import { useContext } from 'react'
import { CartProductActions } from './CartProductActions/CartProductActions'
import { CartProductImage } from './CartProductImage/CartProductImage'
import { CartProductInfo } from './CartProductInfo/CartProductInfo'
import { CartProductsWrapper } from './CartProductsWrapper/CartProductsWrapper'

export function CartProducts() {
  const { cartContent, isCartEmpty } = useContext(CartContext)

  return (
    <CartProductsWrapper>
      {!isCartEmpty &&
        cartContent.map((product) => {
          return (
            <li key={product.id} className="flex py-6">
              {<CartProductImage images={product.images} />}
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
