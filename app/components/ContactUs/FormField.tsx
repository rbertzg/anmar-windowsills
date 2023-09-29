import WarningIcon from 'components/shared/icons/Warning'
import { HTMLInputTypeAttribute } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { FormValues } from './fromSchema'

interface FormFieldProps {
  label: string
  name: keyof FormValues
  textarea?: boolean
  type?: HTMLInputTypeAttribute
  required?: boolean
  disabled?: boolean
  error?: FieldError
  register: UseFormRegister<FormValues>
}

const FormField = ({
  label,
  name,
  textarea,
  type = 'text',
  required,
  disabled,
  error,
  register,
}: FormFieldProps) => {
  const controlElement = textarea ? (
    <textarea
      id={name}
      rows={4}
      disabled={disabled}
      className={`mt-2 block w-full rounded-md p-2 text-sm font-light shadow outline-none duration-200 disabled:cursor-not-allowed disabled:opacity-70 ${
        error
          ? 'bg-error-100 focus-visible:bg-error-100 focus-visible:ring-2 focus-visible:ring-error-300'
          : 'bg-gray-50 focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300'
      }`}
      {...register(name)}
    ></textarea>
  ) : (
    <input
      id={name}
      type={type}
      disabled={disabled}
      className={`mt-2 block w-full rounded-md p-2 text-sm font-light shadow outline-none duration-200 disabled:cursor-not-allowed disabled:opacity-70 ${
        error
          ? 'bg-error-100 focus-visible:bg-error-100 focus-visible:ring-2 focus-visible:ring-error-300'
          : 'bg-gray-50 focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300'
      }`}
      {...register(name)}
    />
  )

  return (
    <div>
      <label
        htmlFor={name}
        className={`text-sm font-normal ${disabled ? 'opacity-70' : ''}`}
      >
        {label}
        {required && <span> *</span>}
      </label>

      {controlElement}

      {error && (
        <p className="mt-1 flex items-center gap-1 text-sm font-light text-error-500">
          <WarningIcon
            size={18}
            weight="light"
          />
          {error?.message}
        </p>
      )}
    </div>
  )
}

export default FormField
