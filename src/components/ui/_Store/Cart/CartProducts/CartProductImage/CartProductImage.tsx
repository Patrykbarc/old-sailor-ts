import { useCartPathname } from '@/lib/customHooks/useCartPathname'
import { ImageNode } from '@/lib/types/cart/Cart'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import PLACEHOLDER from '/public/placeholder.jpg'

type CartProductImageProps = {
  href: string
  quantity: number
  images?: ImageNode
  children?: ReactNode
}

export function CartProductImage({
  href,
  quantity,
  images,
  children,
}: CartProductImageProps) {
  const [isCartPage] = useCartPathname()
  const url = images?.src
  const alt = images?.altText

  return (
    <Link href={href}>
      <div className="relative h-24 w-24 flex-shrink-0 rounded-md border border-gray-200">
        <Image
          width={95}
          height={95}
          quality={30}
          src={url ?? PLACEHOLDER}
          alt={alt ?? 'Product placeholder'}
          className="h-full w-full object-cover object-center rounded-md"
        />
        {!isCartPage && (
          <small className="absolute -top-1.5 -right-2.5 z-50 bg-neutral-700 text-neutral-100 border aspect-square rounded-full size-6 flex items-center justify-center ">
            {quantity}
          </small>
        )}
      </div>
    </Link>
  )
}
