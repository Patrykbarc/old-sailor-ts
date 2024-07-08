import { Pagination } from '@/components/ui/Pagination/Pagination'
import { ProductsList } from '@/components/ui/_Store/Lists/ProductsList/ProductsList'
import { ProductListLayout } from '@/components/views/Store/ProductListLayout/ProductListLayout'
import { getProductsFilterCategory } from '@/lib/functions/productsList/getProductsFilterCategory'
import { getProductsListAndTotalPages } from '@/lib/functions/productsList/getProductsListAndTotalPages'
import { productsListQuery } from '@/lib/queries/productsListQuery'

type ProductsProps = {
  searchParams: { [key: string]: string }
}

export default async function Products({ searchParams }: ProductsProps) {
  const categoryId = getProductsFilterCategory(searchParams.category)

  const { data, totalPages, hasNextPage, hasPreviousPage, page } =
    await getProductsListAndTotalPages(
      searchParams,
      productsListQuery,
      categoryId
    )

  return (
    <ProductListLayout>
      <ProductsList products={data.collection.products.edges} />
      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
          totalPages={totalPages}
          searchParams={searchParams}
        />
      )}
    </ProductListLayout>
  )
}
