import { ReactNode } from 'react'

type CartProductsWrapperProps = {
  children: ReactNode
}

export function CartProductsWrapper({ children }: CartProductsWrapperProps) {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto pr-8 ">
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {children}
          </ul>
        </div>
      </div>
    </div>
  )
}
