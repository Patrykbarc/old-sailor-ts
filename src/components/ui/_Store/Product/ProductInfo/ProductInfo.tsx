import { useProductLogic } from '@/lib/customHooks/useProductLogic'
import { CartTypes } from '@/lib/types/CartTypes'
import { StoreLinkButton } from '../../StoreLinkButton/StoreLinkButton'
import { AddToCartButton } from './AddToCartButton/AddToCartButton'
import { ProductDescription } from './ProductDescription/ProductDescription'
import { ProductPrice } from './ProductPrice/ProductPrice'
import { ProductQuantity } from './ProductQuantity/ProductQuantity'
import { ProductTitle } from './ProductTitle/ProductTitle'
import { ProductVariants } from './ProductVariants/ProductVariants'

export type ProductInfoProps = {
  productInfo: CartTypes
}

export function ProductInfo({ productInfo }: ProductInfoProps) {
  const {
    title,
    price,
    description,
    hasMulitpleVariants,
    availableForSale,
    variants,
    selectedVariant,
    setVariant,
    quantity,
    setQuantity,
    checkoutUrl,
    cartProductData,
  } = useProductLogic(productInfo)

  return (
    <div className="flex flex-col">
      <ProductTitle title={title} />
      <ProductPrice price={price} />
      <ProductDescription description={description} />

      <div
        className={`flex flex-col gap-5 ${!hasMulitpleVariants ? 'mt-5' : ''}`}
      >
        {hasMulitpleVariants && (
          <ProductVariants
            variants={variants}
            selectedVariant={selectedVariant}
            setVariant={setVariant}
          />
        )}
        {availableForSale ? (
          <>
            <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
            <div className="flex flex-col gap-3">
              <AddToCartButton
                quantity={quantity}
                productInfo={cartProductData}
              />
              <StoreLinkButton
                href={checkoutUrl}
                external={true}
                text="Buy now"
                variant="cta"
              />
            </div>
          </>
        ) : (
          <p>Out of stock</p>
        )}
      </div>
    </div>
  )
}
