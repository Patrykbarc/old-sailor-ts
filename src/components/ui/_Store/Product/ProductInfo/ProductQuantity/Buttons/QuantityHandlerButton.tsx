import { Button } from '@/components/ui/Button/Button'
import { Action } from '@/lib/customHooks/setProductsQuantityReducer/setProductsQuantityReducer'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { Dispatch } from 'react'

type ActionTypes = 'add' | 'subtract'

type QuantityHandlerButtonProps = {
  actionType: ActionTypes
  setQuantity: Dispatch<Action>
  title: string
}

export function QuantityHandlerButton({
  actionType,
  setQuantity,
  title,
}: QuantityHandlerButtonProps) {
  const spanType = `${
    actionType === 'add' ? 'Increase' : 'Decrease'
  } quantity for ${title}`

  return (
    <Button
      className="size-12 aspect-square border-none"
      onClick={() => setQuantity({ type: actionType })}
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
