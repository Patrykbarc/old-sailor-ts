import { Breadcrumbs } from '@/components/ui/_Store/Breadcrumbs/Breadcrumbs'
import { ProductImageGallery } from '@/components/ui/_Store/Product/ProductImageGallery/ProductImageGallery'
import { ProductInfo } from '@/components/ui/_Store/Product/ProductInfo/ProductInfo'

export function Product() {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <Breadcrumbs />
        <ProductImageGallery />
        <ProductInfo />
      </div>
    </div>
  )
}
