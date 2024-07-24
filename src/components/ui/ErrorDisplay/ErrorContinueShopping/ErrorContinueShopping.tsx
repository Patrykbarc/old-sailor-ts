import Link from 'next/link'
import { Button } from '../../Button/Button'

export function ErrorContinueShopping() {
  return (
    <div className="mt-6">
      <Button>
        <Link href="/store" prefetch={false}>
          Continue Shopping
        </Link>
      </Button>
    </div>
  )
}
