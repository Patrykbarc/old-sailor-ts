import { BestsellersList } from '@/components/ui/_Store/Lists/BestsellersList/BestsellersList'
import { Hero } from '@/components/views/Store/Hero/Hero'
import { ProductListLayout } from '@/components/views/Store/ProductListLayout/ProductListLayout'

export default function Store() {
  return (
    <main className="pt-14">
      <Hero />
      <ProductListLayout title="Bestsellers">
        <BestsellersList />
      </ProductListLayout>
    </main>
  )
}
