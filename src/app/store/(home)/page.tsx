import { Bestsellers } from '@/components/views/Store/Bestsellers/Bestsellers'
import { Hero } from '@/components/views/Store/Hero/Hero'

export default function Store() {
  return (
    <main className="pt-14">
      <Hero />
      <Bestsellers />
    </main>
  )
}
