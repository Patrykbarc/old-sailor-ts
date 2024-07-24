'use client'

import { ErrorDisplay } from '@/components/ui/ErrorDisplay/ErrorDisplay'

export default function Error() {
  return (
    <ErrorDisplay
      icon="☠"
      title="Arrr... Looks like this product was lost at sea!"
      description="But don't worry, we'll find it soon enough"
    />
  )
}
