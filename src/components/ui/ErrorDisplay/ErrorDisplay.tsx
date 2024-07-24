import { ReactNode } from 'react'
import { ErrorContinueShopping } from './ErrorContinueShopping/ErrorContinueShopping'
import { ErrorWrapper } from './ErrorWrapper/ErrorWrapper'

type ErrorProps = {
  title: string
  description: string
  icon?: string | ReactNode
}

export function ErrorDisplay({ icon, title, description }: ErrorProps) {
  return (
    <ErrorWrapper>
      {icon && <span className="text-9xl select-none">{icon}</span>}
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <p className="mt-4 text-muted-foreground">{description}</p>
      <ErrorContinueShopping />
    </ErrorWrapper>
  )
}
