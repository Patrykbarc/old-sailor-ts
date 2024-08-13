import { FormMessage } from '@/components/ui/Form/Form'
import { FieldError } from 'react-hook-form'

type FieldNotificationsProps = {
  error?: FieldError
  label?: string
}

export function FieldNotifications({ error, label }: FieldNotificationsProps) {
  if (!error && !label) return

  return (
    <div className="grid grid-cols-3 w-full">
      {error && (
        <FormMessage className="col-span-3">{error.message}</FormMessage>
      )}
      {label && (
        <label className="flex items-center text-xs font-medium col-start-4">
          {label}
        </label>
      )}
    </div>
  )
}
