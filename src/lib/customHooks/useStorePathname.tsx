import { usePathname } from 'next/navigation'

export function useStorePathname(): boolean[] {
  const pathname = usePathname()
  const isCartPage = pathname.includes('/store/cart')

  return [isCartPage]
}
