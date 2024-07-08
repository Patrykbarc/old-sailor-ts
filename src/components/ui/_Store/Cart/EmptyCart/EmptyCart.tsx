import { Button } from '@/components/ui/Button/Button'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md text-center">
        <ShoppingCartIcon className="mx-auto h-12 w-12" />
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Your cart is empty
        </h2>
        <p className="mt-4 text-muted-foreground">
          Looks like you haven't added any items to your cart yet. Start
          shopping to add items to your cart.
        </p>
        <div className="mt-6">
          <Button>
            <Link href="/store/products" prefetch={false}>
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
