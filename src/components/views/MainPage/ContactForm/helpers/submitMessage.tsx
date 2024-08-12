import { RecaptchaSubmitStatus } from '@/lib/types/contactForm/RecaptchaSubmitStatus'
import axios from 'axios'
import { Dispatch, SetStateAction } from 'react'
import { IGoogleReCaptchaConsumerProps } from 'react-google-recaptcha-v3'
import { UseFormClearErrors, UseFormSetError } from 'react-hook-form'
import { FormSchemaValues } from './formSchema'

type SubmitMessageProps = {
  executeRecaptcha: IGoogleReCaptchaConsumerProps['executeRecaptcha']
  setRecaptchaSubmitStatus: Dispatch<SetStateAction<RecaptchaSubmitStatus>>
  setError: UseFormSetError<FormSchemaValues>
  clearErrors: UseFormClearErrors<FormSchemaValues>
}

export async function submitMessage({
  executeRecaptcha,
  setRecaptchaSubmitStatus,
  setError,
  clearErrors,
}: SubmitMessageProps) {
  if (!executeRecaptcha) {
    console.error('ReCAPTCHA not available')
    setError('formError', {
      type: 'manual',
      message: 'ReCAPTCHA is not available. Please try again later.',
    })
    return
  }

  const gRecaptchaToken = await executeRecaptcha('registerSubmit')

  try {
    const response = await axios.post(
      '/api/recaptchaSubmit',
      {
        gRecaptchaToken,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )

    if (response.data.success) {
      setRecaptchaSubmitStatus('success')
      clearErrors('formError')
    } else {
      console.error(`Registration failure with score: ${response.data.score}`)
      setRecaptchaSubmitStatus('failed')
      setError('formError', {
        type: 'manual',
        message:
          'Submission failed due to low reCAPTCHA score. Please try again.',
      })
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    setRecaptchaSubmitStatus('failed')
    setError('formError', {
      type: 'manual',
      message: 'An error occurred during submission. Please try again.',
    })
  }
}
