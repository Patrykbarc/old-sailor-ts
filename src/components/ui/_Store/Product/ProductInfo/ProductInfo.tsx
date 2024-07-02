import { PriceRangeV2 } from '@/lib/types/singleTypes/PriceRangeV2type'
import { Variants } from '@/lib/types/singleTypes/VariantsType'
import { AddToCartButton } from './AddToCartButton/AddToCartButton'
import { BuyNowButton } from './BuyNowButton/BuyNowButton'
import { ProductDescription } from './ProductDescription/ProductDescription'
import { ProductPrice } from './ProductPrice/ProductPrice'
import { ProductQuantity } from './ProductQuantity/ProductQuantity'
import { ProductTitle } from './ProductTitle/ProductTitle'
import { ProductVariants } from './ProductVariants/ProductVariants'

type ProductInfoProps = {
  productInfo: {
    title: string
    description: string
    tags: Array<string>
    priceRangeV2: PriceRangeV2
    variants: Variants
  }
}

export function ProductInfo({ productInfo }: ProductInfoProps) {
  const { variants } = productInfo
  const title = productInfo.title
  const price = productInfo.priceRangeV2.minVariantPrice.amount
  const description = productInfo.description

  const hasMulitpleVariants = variants.edges.length > 1

  return (
    <div className="flex flex-col">
      <ProductTitle title={title} />
      <ProductPrice price={price} />

      <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-gray-200 lg:pr-8 lg:pt-6">
        <ProductDescription description={description} />
        {hasMulitpleVariants && <ProductVariants variants={variants} />}
      </div>

      <div className="flex flex-col gap-3">
        <ProductQuantity title={title} />
        <AddToCartButton />
        <BuyNowButton />
      </div>
    </div>
  )
}
