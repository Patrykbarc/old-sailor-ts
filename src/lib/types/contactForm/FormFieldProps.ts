import { HTMLInputTypeAttribute } from 'react'
import { Control, FieldValues, Path } from 'react-hook-form'

export type FormFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  placeholder: string
  type?: HTMLInputTypeAttribute
}
