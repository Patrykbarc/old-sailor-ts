'use client'

import { CartContext } from '@/lib/contexts/CartContext'
import { getDestructuredProductInfo } from '@/lib/functions/helpers/getDestructuredProductInfo'
import { CartTypes } from '@/lib/types/CartTypes'
import { usePathname } from 'next/navigation'
import { useContext, useState } from 'react'
import { AddToCartButton } from './AddToCartButton/AddToCartButton'
import { BuyNowButton } from './BuyNowButton/BuyNowButton'
import { ProductDescription } from './ProductDescription/ProductDescription'
import { ProductPrice } from './ProductPrice/ProductPrice'
import { ProductQuantity } from './ProductQuantity/ProductQuantity'
import { ProductTitle } from './ProductTitle/ProductTitle'
import { ProductVariants } from './ProductVariants/ProductVariants'

type ProductInfoProps = {
  productInfo: CartTypes
}

export function ProductInfo({ productInfo }: ProductInfoProps) {
  const { quantity } = useContext(CartContext)

  const {
    title,
    price,
    description,
    variants,
    variantId,
    variantName,
    hasMulitpleVariants,
  } = getDestructuredProductInfo(productInfo)

  const [selectedVariant, setVariant] = useState({
    id: variantId,
    title: variantName,
  })

  const href = usePathname()
  const cartProductData = { ...productInfo, href, quantity }

  return (
    <div className="flex flex-col">
      <ProductTitle title={title} />
      <ProductPrice price={price} />
      <ProductDescription description={description} />

      <div className="flex flex-col gap-5">
        {hasMulitpleVariants && (
          <ProductVariants
            variants={variants}
            selectedVariant={selectedVariant}
            setVariant={setVariant}
          />
        )}
        <ProductQuantity title={title} />

        <div className="flex flex-col gap-3">
          <AddToCartButton quantity={quantity} productInfo={cartProductData} />
          <BuyNowButton />
        </div>
      </div>
    </div>
  )
}
