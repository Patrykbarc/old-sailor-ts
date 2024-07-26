'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { ReactNode, useEffect } from 'react'

type AOSProviderProps = {
  children: ReactNode
}

export function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    AOS.init()
  }, [])

  return <>{children}</>
}
