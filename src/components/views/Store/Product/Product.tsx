import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import { Breadcrumbs } from '@/components/ui/_Store/Breadcrumbs/Breadcrumbs'
import { ProductImageGallery } from '@/components/ui/_Store/Product/ProductImageGallery/ProductImageGallery'
import { ProductInfo } from '@/components/ui/_Store/Product/ProductInfo/ProductInfo'
import { SingleProductTypes } from '@/lib/types/SingleProductTypes'

type ProductTypes = {
  productData: SingleProductTypes
}

export function Product({ productData }: ProductTypes) {
  const { images, ...productInfo } = productData

  return (
    <div className="bg-white">
      <div className="pt-6">
        <Breadcrumbs />
        <Wrapper className="grid mx-auto grid-cols-2 mt-11" variant="wide">
          {images && <ProductImageGallery productImages={images.edges} />}
          <ProductInfo productInfo={productInfo} />
        </Wrapper>
      </div>
    </div>
  )
}
