'use client'

import { Input } from '@/components/ui/Input/Input'
import { useCart } from '@/lib/customHooks/useCart'
import { useEffect } from 'react'
import { FieldsetWrapper } from '../FieldsetWrapper/FieldsetWrapper'
import { QuantityHandlerButton } from './Buttons/QuantityHandlerButton'

type ProductQuantityProps = {
  quantity: number
  setQuantity: (quantity: number) => void
  maxVariantQuantity: number
  lineId?: string
}

export function ProductQuantity({
  quantity,
  setQuantity,
  maxVariantQuantity,
  lineId,
}: ProductQuantityProps) {
  const { updateQuantity } = useCart()

  useEffect(() => {
    setQuantity(1)
  }, [maxVariantQuantity])

  const handleQuantityChange = (newQuantity: number) => {
    const quantity =
      newQuantity > maxVariantQuantity ? maxVariantQuantity : newQuantity

    setQuantity(quantity)
    if (lineId) {
      updateQuantity(lineId, quantity)
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
            disabled={quantity <= 1}
          />
          <Input
            className="size-12 aspect-square border-none no-spinner text-center z-10"
            onChange={(e) =>
              handleQuantityChange(Math.max(1, Number(e.target.value)))
            }
            value={quantity}
            step={1}
            min={1}
            max={maxVariantQuantity}
            type="number"
          />
          <QuantityHandlerButton
            actionType="add"
            setQuantity={() => handleQuantityChange(quantity + 1)}
            title="Product"
            disabled={quantity >= maxVariantQuantity}
          />
        </div>
      </FieldsetWrapper>
    </div>
  )
}
