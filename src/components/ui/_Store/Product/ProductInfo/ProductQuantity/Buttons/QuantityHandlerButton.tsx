import { Button } from '@/components/ui/Button/Button'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

type ActionTypes = 'add' | 'subtract'

type QuantityHandlerButtonProps = {
  actionType: ActionTypes
  setQuantity: () => void
  title: string
  disabled: boolean
}

export function QuantityHandlerButton({
  actionType,
  setQuantity,
  title,
  disabled,
}: QuantityHandlerButtonProps) {
  const spanType = `${
    actionType === 'add' ? 'Increase' : 'Decrease'
  } quantity for ${title}`

  return (
    <Button
      className="size-12 aspect-square border-none"
      onClick={setQuantity}
      variant={'outline'}
      size="icon"
      disabled={disabled}
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
