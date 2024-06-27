import { PopularProductsList } from '@/components/ui/_Store/PopularProductsList/PopularProductsList'

export async function PopularProducts() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <PopularProductsList />
      </div>
    </div>
  )
}
