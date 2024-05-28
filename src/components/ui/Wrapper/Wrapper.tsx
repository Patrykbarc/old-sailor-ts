import { ReactNode } from 'react'

type WrapperProps = {
	children: ReactNode
	className?: string
}

export function Wrapper({ children, className }: WrapperProps) {
	return <div className={`px-6 md:px-12 lg:px-24 xl:px-80 ${className}`}>{children}</div>
}
