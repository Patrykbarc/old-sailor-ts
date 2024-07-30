import { usePathname } from 'next/navigation'

export function useCartPathname(): boolean[] {
  const pathname = usePathname()
  const isCartPage = pathname.includes('/store/cart')

  return [isCartPage]
}
