import { axiosAPI } from '@/lib/axios/axiosAPI'
import { RecaptchaSubmitStatus } from '@/lib/customHooks/useRecaptcha'
import { Dispatch, SetStateAction } from 'react'
import { IGoogleReCaptchaConsumerProps } from 'react-google-recaptcha-v3'
import {
  FieldValues,
  UseFormClearErrors,
  UseFormSetError,
} from 'react-hook-form'

type RecaptchaSubmitProps<T extends FieldValues> = {
  executeRecaptcha: IGoogleReCaptchaConsumerProps['executeRecaptcha']
  setRecaptchaSubmitStatus: Dispatch<SetStateAction<RecaptchaSubmitStatus>>
  setError: UseFormSetError<T>
  clearErrors: UseFormClearErrors<T>
}

const error = {
  notAvailable: 'ReCAPTCHA is not available. Please try again later.',
  registerFail:
    'Submission failed due to low reCAPTCHA score. Please try again.',
  submitError: 'An error occurred during submission. Please try again.',
}

export async function recaptchaSubmit<T extends FieldValues>({
  executeRecaptcha,
  setRecaptchaSubmitStatus,
  setError,
  clearErrors,
}: RecaptchaSubmitProps<T>) {
  if (!executeRecaptcha) {
    console.error('ReCAPTCHA not available')
    setError('root', {
      type: 'manual',
      message: error.notAvailable,
    })

    return
  }

  const gRecaptchaToken = await executeRecaptcha('registerSubmit')

  try {
    const response = await axiosAPI.post('/api/recaptchaSubmit', {
      gRecaptchaToken,
    })

    if (response.data.success) {
      console.log(`Registration success: ${response.data.score}`)
      setRecaptchaSubmitStatus('success')
      clearErrors('root')
    } else {
      console.error(`Registration failure with score: ${response.data.score}`)
      setRecaptchaSubmitStatus('failed')
      setError('root', {
        type: 'manual',
        message: error.registerFail,
      })
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    setRecaptchaSubmitStatus('failed')
    setError('root', {
      type: 'manual',
      message: error.submitError,
    })
  }
}
