'use client'

import { setProductsQuantityReducer } from '@/lib/customHooks/setProductsQuantityReducer/setProductsQuantityReducer'
import { CartTypes } from '@/lib/types/CartTypes'
import { usePathname } from 'next/navigation'
import { useReducer, useState } from 'react'
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

function getDestructuredProductInfo(productInfo: CartTypes) {
  const title = productInfo.title
  const price = productInfo.variants.edges[0].node.price
  const description = productInfo.description
  const { variants } = productInfo

  return { title, price, description, variants }
}

export function ProductInfo({ productInfo }: ProductInfoProps) {
  const { title, price, description, variants } =
    getDestructuredProductInfo(productInfo)
  
  const variantId = variants.edges[0].node.id
  const variantName = variants.edges[0].node.title

  const [state, dispatch] = useReducer(setProductsQuantityReducer, {
    quantity: 1,
  })
  const [selectedVariant, setVariant] = useState({
    id: variantId,
    title: variantName,
  })

  const { quantity } = state

  const href = usePathname()
  const cartProductData = { ...productInfo, href, quantity }

  const hasMulitpleVariants = variants.edges.length > 1

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
        <ProductQuantity
          quantity={quantity}
          setQuantity={dispatch}
          title={title}
        />

        <div className="flex flex-col gap-3">
          <AddToCartButton quantity={quantity} productInfo={cartProductData} />
          <BuyNowButton />
        </div>
      </div>
    </div>
  )
}
