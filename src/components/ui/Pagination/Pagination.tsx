import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import {
  Pagination as PaginationBase,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './PaginationPrimitives'

type PaginationProps = {
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  searchParams: { page?: string }
}

export function Pagination({
  currentPage,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  searchParams,
}: PaginationProps) {
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `?${params.toString()}`
  }

  return (
    <PaginationBase className="mt-16">
      <PaginationContent>
        {hasPreviousPage && (
          <PaginationItem>
            <PaginationPrevious href={createPageURL(currentPage - 1)}>
              <ArrowLeftIcon className="w-4" />
            </PaginationPrevious>
          </PaginationItem>
        )}

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1
          const isActive = currentPage === page

          return (
            <PaginationItem key={page}>
              {isActive ? (
                <PaginationLink
                  href={'#'}
                  className="text-primary cursor-not-allowed font-bold"
                >
                  {page}
                </PaginationLink>
              ) : (
                <PaginationLink
                  href={createPageURL(page)}
                  className=" hover:bg-gray-100"
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          )
        })}

        {hasNextPage && (
          <PaginationItem>
            <PaginationNext href={createPageURL(currentPage + 1)}>
              <ArrowRightIcon className="w-4" />
            </PaginationNext>
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationBase>
  )
}
