import { Button } from '@/components/ui/Button/Button'
import { formatPrice } from '@/lib/functions/formatPrice'
import Link from 'next/link'

type CartSubtotalProps = {
  cartValue: number
}

export function CartSubtotal({ cartValue }: CartSubtotalProps) {
  return (
    <>
      <div className="flex justify-between text-base font-medium text-neutral-900">
        <p>Subtotal</p>
        <p>{formatPrice(cartValue)}</p>
      </div>
      <p className="mt-0.5 text-sm text-neutral-500">
        Shipping and taxes calculated at checkout.
      </p>

      <div className="mt-6">
        <Link href="/store/checkout">
          <Button className="w-full" size="xl">
            Checkout
          </Button>
        </Link>
      </div>
    </>
  )
}
