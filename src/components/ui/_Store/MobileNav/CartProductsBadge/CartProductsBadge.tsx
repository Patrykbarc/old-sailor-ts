type CartProductsBadgeProps = {
  productsAmount: number
}

export function CartProductsBadge({ productsAmount }: CartProductsBadgeProps) {
  return (
    <span className="absolute size-6 top-[18px] right-[px] border-2 border-neutral-800 rounded-full bg-primary text-neutral-800 leading-5">
      <small className="block">{productsAmount}</small>
    </span>
  )
}
