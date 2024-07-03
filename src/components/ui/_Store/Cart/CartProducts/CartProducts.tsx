import { CartContext } from '@/lib/contexts/CartContext'
import { useContext } from 'react'
import { CartProductActions } from './CartProductActions/CartProductActions'
import { CartProductInfo } from './CartProductInfo/CartProductInfo'
import { CartProductsWrapper } from './CartProductsWrapper/CartProductsWrapper'

export function CartProducts() {
  const { cartContent } = useContext(CartContext)
  console.log(cartContent)

  const isCartEmpty = cartContent.length === 0

  return (
    <CartProductsWrapper>
      {!isCartEmpty &&
        cartContent.map((product) => {
          return (
            <li key={product.id} className="flex py-6">
              {/* <CartProductImage src={product.imageSrc} alt={product.imageAlt} /> */}
              <div className="ml-4 flex flex-1 flex-col">
                <CartProductInfo
                  href={product.href}
                  title={product.title}
                  price={product.priceRangeV2.minVariantPrice.amount}
                />
                <CartProductActions quantity={product.quantity} />
              </div>
            </li>
          )
        })}
    </CartProductsWrapper>
  )
}
