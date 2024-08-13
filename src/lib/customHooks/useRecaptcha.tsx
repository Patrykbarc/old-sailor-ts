import { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { FieldValues } from 'react-hook-form'
import { recaptchaSubmit } from '../functions/recaptcha/recaptchaSubmit'

export type RecaptchaSubmitStatus = 'success' | 'failed' | null

type UseRecaptchaProps<T extends FieldValues> = {
  form: T
}

export function useRecaptcha<T extends FieldValues>({
  form,
}: UseRecaptchaProps<T>) {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [recaptchaSubmitStatus, setRecaptchaSubmitStatus] =
    useState<RecaptchaSubmitStatus>(null)

  async function submitWithRecaptcha() {
    await recaptchaSubmit({
      executeRecaptcha,
      setRecaptchaSubmitStatus,
      setError: form.setError,
      clearErrors: form.clearErrors,
    })
  }

  return { recaptchaSubmitStatus, submitWithRecaptcha }
}
