import { Pagination } from '@/components/ui/Pagination/Pagination'
import { ProductsList } from '@/components/ui/_Store/Lists/ProductsList/ProductsList'
import { ProductListLayout } from '@/components/views/Store/ProductListLayout/ProductListLayout'
import { calculateTotalPages } from '@/lib/functions/calculatePages'
import { getAllProductsLength } from '@/lib/functions/getAllProductsLength'
import { getShopifyData } from '@/lib/functions/getShopifyData'
import { allProductsQuery } from '@/lib/queries/allProductsQuery'

type ProductsProps = {
  searchParams: { page?: string }
}

export default async function Products({ searchParams }: ProductsProps) {
  const page = parseInt(searchParams.page || '1', 10)
  const cursor = page > 1 ? await getCursorForPage(page) : null
  const variables = { cursor }

  const productsListResponse = await getShopifyData(allProductsQuery, variables)
  const hasNextPage = productsListResponse.products.pageInfo.hasNextPage
  const hasPreviousPage = productsListResponse.products.pageInfo.hasPreviousPage

  const productsCount = await getAllProductsLength(allProductsQuery)
  const totalPages = calculateTotalPages(productsCount)

  return (
    <ProductListLayout>
      <ProductsList products={productsListResponse.products.edges} />
      <Pagination
        currentPage={page}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        totalPages={totalPages}
        searchParams={searchParams}
      />
    </ProductListLayout>
  )
}

async function getCursorForPage(page: number): Promise<string | null> {
  let cursor = null
  for (let i = 1; i < page; i++) {
    const variables = { cursor }
    const response = await getShopifyData(allProductsQuery, variables)
    const products = response.products.edges
    cursor = products[products.length - 1].cursor
  }
  return cursor
}
