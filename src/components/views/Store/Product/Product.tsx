'use client'

import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import { Breadcrumbs } from '@/components/ui/_Store/Breadcrumbs/Breadcrumbs'
import { ProductImageGallery } from '@/components/ui/_Store/Product/ProductImageGallery/ProductImageGallery'
import { ProductInfo } from '@/components/ui/_Store/Product/ProductInfo/ProductInfo'
import { CartTypes } from '@/lib/types/CartTypes'

type ProductTypes = {
  productData: CartTypes
}

export function Product({ productData }: ProductTypes) {
  const { images } = productData
  
  return (
    <div className="bg-white min-h-full w-full py-12">
      <Breadcrumbs />
      <Wrapper
        className="grid mx-auto lg:grid-cols-2 mt-11 gap-11"
        variant="wide"
      >
        {images && <ProductImageGallery productImages={images.edges} />}
        <ProductInfo productInfo={productData} />
      </Wrapper>
    </div>
  )
}
