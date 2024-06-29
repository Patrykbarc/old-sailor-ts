import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { ReactNode } from 'react'

type WrapperVariants = 'default' | 'narrow' | 'wide'

type WrapperProps = {
  variant?: WrapperVariants
  children: ReactNode
  className?: string
}

const wrapperVariants = cva('px-6 md:px-12 flex justify-center', {
  variants: {
    variant: {
      default: 'max-w-[75rem]',
      narrow: 'max-w-[56rem]',
      wide: 'max-w-[86rem]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export function Wrapper({
  variant = 'default',
  children,
  className,
}: WrapperProps) {
  const classes = cn(wrapperVariants({ variant }), className)
  return <div className={`${classes} ${className}`}>{children}</div>
}
