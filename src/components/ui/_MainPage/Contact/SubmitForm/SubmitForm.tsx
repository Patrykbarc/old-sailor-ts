import { Button } from '@/components/ui/Button/Button'
import { FieldError } from 'react-hook-form'
import PulseLoader from 'react-spinners/PulseLoader'
import { MessageSentNotification } from '../MessageSentNotification/MessageSentNotification'
import { RecaptchaSubmitStatus } from '@/lib/types/contactForm/RecaptchaSubmitStatus'

type SubmitFormProps = {
  formError: FieldError | undefined
  recaptchaSubmitStatus: RecaptchaSubmitStatus
  isSubmitting: boolean
}

export function SubmitForm({
  formError,
  recaptchaSubmitStatus,
  isSubmitting,
}: SubmitFormProps) {
  return (
    <div className="space-y-4">
      {formError && <div className="text-red-600">{formError.message}</div>}

      {recaptchaSubmitStatus !== 'success' ? (
        isSubmitting ? (
          <PulseLoader
            color={'#e7b223'}
            size={8}
            aria-label="Form submit loader"
          />
        ) : (
          <Button type="submit">Submit</Button>
        )
      ) : (
        <MessageSentNotification />
      )}
    </div>
  )
}
