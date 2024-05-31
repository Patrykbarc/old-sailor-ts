import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { ReactNode } from 'react'

type WrapperProps = {
	variant?: 'default' | 'narrow'
	children: ReactNode
	className?: string
}

const wrapperVariants = cva('px-6 md:px-12', {
	variants: {
		variant: {
			default: 'max-w-[75rem]',
			narrow: 'max-w-[56rem]',
		},
	},
})

export function Wrapper({ variant, children, className }: WrapperProps) {
	const classes = cn(wrapperVariants({ variant }), className)
	return <div className={classes}>{children}</div>
}
