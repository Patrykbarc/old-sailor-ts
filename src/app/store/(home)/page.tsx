import { Hero } from '@/components/views/Store/Hero/Hero'
import { ProductList } from '@/components/views/Store/ProductList/ProductList'

export default function Store() {
  return (
    <main className="pt-14">
      <Hero />
      <ProductList />
    </main>
  )
}
