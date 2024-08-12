import { cn } from '@/lib/utils'

type WordCounterType = {
  count: number
  max?: number
  className?: string
}

export function WordCounter({ count, max = 1000, className }: WordCounterType) {
  const maxLengthStyle = count > max ? 'text-destructive' : ''

  return (
    <p className={cn(className, maxLengthStyle, 'text-sm font-medium')}>
      {count} / {max}
    </p>
  )
}
