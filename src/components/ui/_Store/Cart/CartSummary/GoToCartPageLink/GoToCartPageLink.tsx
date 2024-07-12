import Link from 'next/link'

export function GoToCartPageLink() {
  return (
    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
      <p>
        or{' '}
        <Link
          href={'/store/cart'}
          type="button"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Show Summary
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </p>
    </div>
  )
}
