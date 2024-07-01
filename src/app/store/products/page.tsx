import { ProductsList } from '@/components/ui/_Store/Lists/ProductsList/ProductsList'
import { ProductListLayout } from '@/components/views/Store/ProductListLayout/ProductListLayout'

export default async function Products() {
  return (
    <ProductListLayout>
      <ProductsList />
    </ProductListLayout>
  )
}
