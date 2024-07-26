import { useCart } from '@/lib/customHooks/useCart'
import { formatPrice } from '@/lib/functions/formatPrice'
import { StoreLinkButton } from '../../../StoreLinkButton/StoreLinkButton'

type CartSubtotalProps = {
  cartValue: number
  isCartPage: boolean
}

export function CartSubtotal({ cartValue, isCartPage }: CartSubtotalProps) {
  const { cartContent } = useCart()
  const { checkoutUrl } = cartContent

  return (
    <>
      <div className="flex justify-between text-base font-medium text-neutral-900">
        <h3>Subtotal</h3>
        <p>{formatPrice(cartValue)}</p>
      </div>
      <p className="mt-0.5 text-sm text-neutral-500 text-left">
        Shipping and taxes calculated at checkout.
      </p>

      {isCartPage && (
        <StoreLinkButton
          href={checkoutUrl}
          external
          text="checkout"
          className="mt-6"
          variant="cta"
        />
      )}
    </>
  )
}
