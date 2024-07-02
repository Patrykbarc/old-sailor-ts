import { BestsellersList } from '@/components/ui/_Store/Lists/BestsellersList/BestsellersList'
import { ViewAllProductsButton } from '@/components/ui/_Store/ViewAllProductsButton/ViewAllProductsButton'
import { Hero } from '@/components/views/Store/Hero/Hero'
import { ProductListLayout } from '@/components/views/Store/ProductListLayout/ProductListLayout'

export default function Store() {
  return (
    <div className="flex-col h-fit w-full">
      <Hero />
      <ProductListLayout title="Bestsellers">
        <BestsellersList />
        <ViewAllProductsButton />
      </ProductListLayout>
    </div>
  )
}
