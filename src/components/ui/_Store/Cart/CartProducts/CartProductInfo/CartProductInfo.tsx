type CartProductInfo = {
  href: string
  name: string
  price: string
  color: string
}

export function CartProductInfo({ href, name, price, color }: CartProductInfo) {
  return (
    <div>
      <div className="flex justify-between text-base font-medium text-neutral-900">
        <h3>
          <a href={href}>{name}</a>
        </h3>
        <p className="ml-4">{price}</p>
      </div>
      <p className="mt-1 text-sm text-neutral-500">{color}</p>
    </div>
  )
}
