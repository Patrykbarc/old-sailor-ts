import { ReactNode } from "react"

type NavWraperProps = {
    children: ReactNode
}

export function NavWraper({children}: NavWraperProps) {
  return (
    <nav className="bg-neutral-800">
      <div className="font-semibold px-8 justify-between pt-8">
        <div className="border-b grid grid-cols-3 pb-6 items-center border-neutral-600">
          {children}
        </div>
      </div>
    </nav>
  )
}
