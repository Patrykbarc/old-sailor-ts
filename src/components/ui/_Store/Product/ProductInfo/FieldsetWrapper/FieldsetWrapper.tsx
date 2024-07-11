import { useStorePathname } from '@/lib/customHooks/useStorePathname'
import { ReactNode } from 'react'

type FieldsetWrapperProps = {
  children: ReactNode
  title: string
  ariaLabel: string
  className?: string
}

export function FieldsetWrapper({
  children,
  title,
  ariaLabel,
  className,
}: FieldsetWrapperProps) {
  const [isCartPage] = useStorePathname()

  return (
    <>
      {!isCartPage && <h3 className="text-sm font-medium text-neutral-900">{title}</h3>}
      <fieldset
        aria-label={ariaLabel}
        className={`mt-4 mb-3 flex flex-col text-neutral-900 ${className}`}
      >
        {children}
      </fieldset>
    </>
  )
}
