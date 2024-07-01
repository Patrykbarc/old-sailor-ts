import { Pagination } from '@/components/ui/Pagination/Pagination'
import { ProductsList } from '@/components/ui/_Store/Lists/ProductsList/ProductsList'
import { ProductListLayout } from '@/components/views/Store/ProductListLayout/ProductListLayout'
import { getProductsListAndTotalPages } from '@/lib/functions/productsList/getProductsListAndTotalPages'
import { productsListQuery } from '@/lib/queries/productsListQuery'

type ProductsProps = {
  searchParams: { [key: string]: string }
}

function getCategory(category: string) {
  switch (category) {
    case undefined:
      return 'gid://shopify/Collection/271803744327'
    case 'cosmetics':
      return 'gid://shopify/Collection/271803121735'
    case 'alcohols':
      return 'gid://shopify/Collection/271803088967'
    default:
      return productsListQuery
  }
}

export default async function Products({ searchParams }: ProductsProps) {
  const categoryId = getCategory(searchParams.category)

  const { productsList, totalPages, hasNextPage, hasPreviousPage, page } =
    await getProductsListAndTotalPages(
      searchParams,
      productsListQuery,
      categoryId
    )

  return (
    <ProductListLayout>
      <ProductsList products={productsList.collection.products.edges} />
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
