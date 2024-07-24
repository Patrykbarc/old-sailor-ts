'use client'

import { ErrorDisplay } from '@/components/ui/ErrorDisplay/ErrorDisplay'

export default function GlobalError() {
  return (
    <ErrorDisplay
      icon="4☠0"
      title="Arrr... Looks like we are lost at the sea!"
      description="But don't worry, we'll find our way back."
    />
  )
}
