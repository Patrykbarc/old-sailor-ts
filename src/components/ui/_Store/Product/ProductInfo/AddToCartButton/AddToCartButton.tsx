import { Button } from '@/components/ui/Button/Button'
import { CartContext } from '@/lib/contexts/CartContext'
import { CartTypes } from '@/lib/types/CartTypes'
import { useContext } from 'react'

type AddToCartButtonProps = {
  productInfo: CartTypes
}

export function AddToCartButton({ productInfo }: AddToCartButtonProps) {
  const { setCartContent } = useContext(CartContext)

  function handleAddProductToCart(product: CartTypes) {
    setCartContent((prev) => [...prev, product])
  }

  return (
    <Button
      size="xl"
      variant="outline"
      className="text-neutral-800"
      onClick={() => handleAddProductToCart(productInfo)}
    >
      Add to cart
    </Button>
  )
}
