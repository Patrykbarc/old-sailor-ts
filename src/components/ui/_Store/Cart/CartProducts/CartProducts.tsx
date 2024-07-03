import { cartProductsPlaceholder as products } from '@/lib/constants/Store/cartProductsPlaceholder'
import { CartProductActions } from './CartProductActions/CartProductActions'
import { CartProductImage } from './CartProductImage/CartProductImage'
import { CartProductInfo } from './CartProductInfo/CartProductInfo'
import { CartProductsWrapper } from './CartProductsWrapper/CartProductsWrapper'

export function CartProducts() {
  return (
    <CartProductsWrapper>
      {products.map((product) => (
        <li key={product.id} className="flex py-6">
          <CartProductImage src={product.imageSrc} alt={product.imageAlt} />
          <div className="ml-4 flex flex-1 flex-col">
            <CartProductInfo
              href={product.href}
              name={product.name}
              price={product.price}
              color={product.color}
            />
            <CartProductActions quantity={product.quantity} />
          </div>
        </li>
      ))}
    </CartProductsWrapper>
  )
}
