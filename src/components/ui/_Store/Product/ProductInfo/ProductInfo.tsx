'use client'

import { CartTypes } from '@/lib/types/CartTypes'
import { usePathname } from 'next/navigation'
import { AddToCartButton } from './AddToCartButton/AddToCartButton'
import { BuyNowButton } from './BuyNowButton/BuyNowButton'
import { ProductDescription } from './ProductDescription/ProductDescription'
import { ProductPrice } from './ProductPrice/ProductPrice'
import { ProductQuantity } from './ProductQuantity/ProductQuantity'
import { ProductTitle } from './ProductTitle/ProductTitle'
import { ProductVariants } from './ProductVariants/ProductVariants'
import { useState } from 'react'

type ProductInfoProps = {
  productInfo: CartTypes
}

export function ProductInfo({ productInfo }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)

  const { variants } = productInfo
  const title = productInfo.title
  const price = productInfo.priceRangeV2.minVariantPrice.amount
  const description = productInfo.description

  const hasMulitpleVariants = variants.edges.length > 1

  const href = usePathname()
  const cartProductData = { ...productInfo, href, quantity }

  return (
    <div className="flex flex-col">
      <ProductTitle title={title} />
      <ProductPrice price={price} />

      <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-gray-200 lg:pr-8 lg:pt-6">
        <ProductDescription description={description} />
        {hasMulitpleVariants && <ProductVariants variants={variants} />}
      </div>

      <div className="flex flex-col gap-3">
        <ProductQuantity quantity={quantity} setQuantity={setQuantity} title={title} />
        <AddToCartButton productInfo={cartProductData} />
        <BuyNowButton />
      </div>
    </div>
  )
}
