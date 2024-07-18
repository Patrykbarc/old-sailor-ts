import { useCheckout } from '@/lib/customHooks/useCheckout'
import { getDestructuredProductInfo } from '@/lib/functions/helpers/getDestructuredProductInfo'
import { CartTypes } from '@/lib/types/CartTypes'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { StoreLinkButton } from '../../StoreLinkButton/StoreLinkButton'
import { AddToCartButton } from './AddToCartButton/AddToCartButton'
import { ProductDescription } from './ProductDescription/ProductDescription'
import { ProductPrice } from './ProductPrice/ProductPrice'
import { ProductQuantity } from './ProductQuantity/ProductQuantity'
import { ProductTitle } from './ProductTitle/ProductTitle'
import { ProductVariants } from './ProductVariants/ProductVariants'

type ProductInfoProps = {
  productInfo: CartTypes
}

export function ProductInfo({ productInfo }: ProductInfoProps) {
  const {
    title,
    price,
    description,
    variants,
    merchandiseId,
    variantName,
    hasMulitpleVariants,
  } = getDestructuredProductInfo(productInfo)

  const [selectedVariant, setVariant] = useState({
    id: merchandiseId,
    title: variantName,
  })
  const [quantity, setQuantity] = useState(1)
  const checkoutUrl = useCheckout([
    { merchandiseId: selectedVariant.id, quantity: quantity },
  ])

  const href = usePathname()
  const cartProductData = {
    ...productInfo,
    href,
    quantity,
    merchandiseId: selectedVariant.id,
    variantName: selectedVariant.title,
  }

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
        <ProductQuantity quantity={quantity} setQuantity={setQuantity} />

        <div className="flex flex-col gap-3">
          <AddToCartButton
            quantity={quantity}
            variant={selectedVariant.id}
            productInfo={cartProductData}
          />
          <StoreLinkButton
            href={checkoutUrl}
            external={true}
            text="Buy now"
            variant="cta"
          />
        </div>
      </div>
    </div>
  )
}
