import { useProductLogic } from '@/lib/customHooks/useProductLogic'
import { CartTypes } from '@/lib/types/CartTypes'
import { OutOfStock } from '../../OutOfStock/OutOfStock'
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

  const isProductAvailable = availableForSale && variants.edges.length > 1
  const isSingleVariantAvailable = variants.edges[0].node.quantityAvailable > 1
  const showProductOptions = isProductAvailable || isSingleVariantAvailable

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
        {showProductOptions ? (
          <>
            <ProductQuantity
              quantity={quantity}
              setQuantity={setQuantity}
              maxVariantQuantity={selectedVariant.quantityAvailable}
            />
            <div className="flex flex-col gap-3">
              <AddToCartButton
                quantity={quantity}
                productInfo={cartProductData}
              />
              <StoreLinkButton
                href={checkoutUrl}
                external
                text="Buy now"
                variant="cta"
              />
            </div>
          </>
        ) : (
          <OutOfStock />
        )}
      </div>
    </div>
  )
}
