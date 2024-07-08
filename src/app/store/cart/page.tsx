'use client'

import { CartProducts } from '@/components/ui/_Store/Cart/CartProducts/CartProducts'
import { CartSummary } from '@/components/ui/_Store/Cart/CartSummary/CartSummary'
import { EmptyCart } from '@/components/ui/_Store/Cart/EmptyCart/EmptyCart'
import { Separator } from '@/components/ui/Separator/Separator'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import { CartContext } from '@/lib/contexts/CartContext'
import { useStorePathname } from '@/lib/customHooks/useStorePathname'
import { useContext, useEffect, useRef, useState } from 'react'

export default function Cart() {
  const { isCartEmpty } = useContext(CartContext)
  const [separatorOrientation, setSeparatorOrientation] = useState<
    'horizontal' | 'vertical'
  >('vertical')

  const { isCartPage } = useStorePathname()
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width
        if (width <= 1024) {
          setSeparatorOrientation('horizontal')
        } else {
          setSeparatorOrientation('vertical')
        }
      }
    })

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  return (
    <div className="bg-white w-full" ref={elementRef}>
      {!isCartEmpty ? (
        <Wrapper className="mx-auto h-full py-16 gap-12 flex flex-col lg:flex-row">
          <CartProducts className="overflow-y-hidden" />
          <Separator
            orientation={separatorOrientation}
            className="my-3 md:my-0.5 bg-neutral-200"
          />
          <CartSummary isCartPage={isCartPage} />
        </Wrapper>
      ) : (
        <EmptyCart />
      )}
    </div>
  )
}
