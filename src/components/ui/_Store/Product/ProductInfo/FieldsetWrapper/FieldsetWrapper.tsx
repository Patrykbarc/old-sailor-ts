import { useCartPathname } from '@/lib/customHooks/useCartPathname'
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
  const [isCartPage] = useCartPathname()

  return (
    <div>
      {!isCartPage && (
        <h3 className="mb-3 text-sm font-medium text-neutral-900">{title}</h3>
      )}
      <fieldset
        aria-label={ariaLabel}
        className={`flex flex-col text-neutral-900 ${className}`}
      >
        {children}
      </fieldset>
    </div>
  )
}
