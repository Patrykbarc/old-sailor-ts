type CartProductActionsProps = {
  quantity: number
}

export function CartProductActions({ quantity }: CartProductActionsProps) {
  return (
    <div className="flex flex-1 items-end justify-between text-sm">
      <p className="text-neutral-500">Qty {quantity}</p>

      <div className="flex">
        <button
          type="button"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Remove
        </button>
      </div>
    </div>
  )
}
