'use client'

import { Input } from '@/components/ui/Input/Input'
import { CartContext } from '@/lib/contexts/CartContext'
import { useContext } from 'react'
import { FieldsetWrapper } from '../FieldsetWrapper/FieldsetWrapper'
import { QuantityHandlerButton } from './Buttons/QuantityHandlerButton'

type ProductQuantityProps = {
  productId?: string
  quantity: number
  setQuantity: (quantity: number) => void
}

export function ProductQuantity({
  productId,
  quantity,
  setQuantity,
}: ProductQuantityProps) {
  const { updateQuantity } = useContext(CartContext)

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity)
    if (productId) {
      updateQuantity(productId, newQuantity)
    }
  }

  return (
    <div>
      <FieldsetWrapper
        title="Quantity"
        ariaLabel="Choose a quantity"
        className="w-fit"
      >
        <div className="flex border rounded-md">
          <QuantityHandlerButton
            actionType="subtract"
            setQuantity={() => handleQuantityChange(Math.max(1, quantity - 1))}
            title="Product"
          />
          <Input
            className="size-12 aspect-square border-none no-spinner text-center z-10"
            onChange={(e) =>
              handleQuantityChange(Math.max(1, Number(e.target.value)))
            }
            value={quantity}
            step={1}
            min={1}
            type="number"
          />
          <QuantityHandlerButton
            actionType="add"
            setQuantity={() => handleQuantityChange(quantity + 1)}
            title="Product"
          />
        </div>
      </FieldsetWrapper>
    </div>
  )
}
