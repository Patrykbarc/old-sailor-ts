import { Button } from '@/components/ui/Button/Button'
import { CartContext } from '@/lib/contexts/CartContext'
import { SingleProductTypes } from '@/lib/types/SingleProductTypes'
import { useContext } from 'react'

type AddToCartButtonProps = {
  productInfo: SingleProductTypes
}

export function AddToCartButton({ productInfo }: AddToCartButtonProps) {
  const { setCartContent } = useContext(CartContext)

  function handleAddProductToCart(product: SingleProductTypes) {
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
