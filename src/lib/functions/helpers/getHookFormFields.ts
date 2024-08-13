import { FieldError, FieldValues } from 'react-hook-form'

export function getHookFormFields<T extends FieldValues>(form: T) {
  const isSubmitSuccessful = form.formState.isSubmitSuccessful
  const isSubmitting = form.formState.isSubmitting
  const formControl = form.control
  const formError = form.formState.errors.root as FieldError | undefined

  return { isSubmitSuccessful, isSubmitting, formControl, formError }
}
