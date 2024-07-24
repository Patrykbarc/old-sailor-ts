import { ReactNode } from 'react'

type ErrorWrapperProps = {
  children: ReactNode
}

export function ErrorWrapper({ children }: ErrorWrapperProps) {
  return (
    <div className="bg-white w-full">
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-md text-center">{children}</div>
      </div>
    </div>
  )
}
