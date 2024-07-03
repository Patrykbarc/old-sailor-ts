import Link from 'next/link'

export function CartSummary() {
  return (
    <div className="border-t border-gray-200 py-6">
      <div className="flex justify-between text-base font-medium text-neutral-900">
        <p>Subtotal</p>
        <p>$262.00</p>
      </div>
      <p className="mt-0.5 text-sm text-neutral-500">
        Shipping and taxes calculated at checkout.
      </p>

      <div className="mt-6">
        <Link
          href="#"
          className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-neutral-800 shadow-sm hover:bg-primary-foreground"
        >
          Checkout
        </Link>
      </div>
    </div>
  )
}
