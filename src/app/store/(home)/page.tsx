import { Hero } from '@/components/views/Store/Hero/Hero'
import { PopularProducts } from '@/components/views/Store/PopularProducts/PopularProducts'

export default function Store() {
  return (
    <main className="pt-14">
      <Hero />
      <PopularProducts />
    </main>
  )
}
