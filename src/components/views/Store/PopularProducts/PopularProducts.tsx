import { Bestsellers } from '@/components/ui/_Store/Bestsellers/Bestsellers'

export async function PopularProducts() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Bestsellers
        </h2>
        <Bestsellers />
      </div>
    </div>
  )
}
