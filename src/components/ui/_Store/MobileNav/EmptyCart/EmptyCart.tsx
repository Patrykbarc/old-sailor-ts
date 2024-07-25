import { ErrorDisplay } from '@/components/ui/ErrorDisplay/ErrorDisplay'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export function EmptyCart() {
  return (
    <ErrorDisplay
      icon={<ShoppingCartIcon className="mx-auto h-12 w-12" />}
      title="Your cart is empty"
      description="Looks like you haven't added any items to your cart yet. Start
    shopping to add items to your cart."
    />
  )
}
