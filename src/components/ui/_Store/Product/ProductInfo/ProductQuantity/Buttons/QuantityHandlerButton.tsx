import { Button } from '@/components/ui/Button/Button'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { Dispatch, SetStateAction } from 'react'

type ActionTypes = 'add' | 'subtract'

type QuantityHandlerButtonProps = {
  actionType: ActionTypes
  quantity: number
  setQuantity: Dispatch<SetStateAction<number>>
  title: string
}

export function QuantityHandlerButton({
  actionType,
  quantity,
  setQuantity,
  title,
}: QuantityHandlerButtonProps) {
  function handleSetQuantity(action: ActionTypes) {
    switch (action) {
      case 'add':
        setQuantity(quantity + 1)
        break
      case 'subtract':
        setQuantity(quantity > 1 ? quantity - 1 : 1)
        break
    }
  }

  const spanType = String(
    `${actionType === 'add' ? 'Increase' : 'Decrease'} quantity for ${title}`
  )

  return (
    <Button
      className="size-12 aspect-square border-none"
      onClick={() => handleSetQuantity(actionType)}
      variant={'outline'}
      size="icon"
    >
      <span className="hidden">{spanType}</span>
      {actionType === 'add' ? (
        <PlusIcon className="size-4" />
      ) : (
        <MinusIcon className="size-4" />
      )}
    </Button>
  )
}
