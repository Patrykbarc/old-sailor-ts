import { FormSchemaValues } from "@/components/views/MainPage/ContactForm/helpers/formSchema"
import { Control } from "react-hook-form"

export type ContactFormFieldProps = {
    control: Control<FormSchemaValues>
    name: keyof FormSchemaValues
    placeholder: string
  }
  