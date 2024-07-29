import { Animations } from '@/lib/types/Animations'
import { ReactNode } from 'react'

type AnimationTimes = 750 | 1000 | 1250 | 1500 | 2000

type AOSWrapper = {
  children: ReactNode
  animation?: Animations
  duration?: AnimationTimes
  delay?: AnimationTimes
  className?: string
}

export function AOSWrapper({
  children,
  animation = 'fade-in',
  duration = 750,
  delay,
  className,
}: AOSWrapper) {
  return (
    <div
      className={className}
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {children}
    </div>
  )
}
