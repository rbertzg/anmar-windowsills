import { zodResolver } from '@hookform/resolvers/zod'
import useWeb3forms from '@web3forms/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import formSchema, { FormValues } from './fromSchema'

const useContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      botcheck: false,
    },
  })

  const [isSentSuccessfully, setIsSentSuccessfully] = useState<
    boolean | undefined
  >(undefined)

  const { submit } = useWeb3forms({
    access_key: process.env.NEXT_PUBLIC_WEB3FORMS as string,
    settings: {
      from_name: 'Strona internetowa',
      subject: 'Nowa wiadomość z formularza kontaktowego',
    },
    onSuccess: () => {
      setIsSentSuccessfully(true)
      reset()
    },
    onError: () => {
      setIsSentSuccessfully(false)
    },
  })

  const onSubmit = handleSubmit((data) => {
    submit({
      'Imię i nazwisko': data.fullName,
      'Adres e-mail': data.email,
      'Numer telefonu': data.phone,
      Temat: data.subject,
      Wiadomość: data.message,
      botcheck: data.botcheck,
    })
  })

  const handleCloseSubmissionFeedback = () => {
    setIsSentSuccessfully(undefined)
  }

  return {
    isSubmitting,
    isSentSuccessfully,
    handleCloseSubmissionFeedback,
    errors,
    register,
    onSubmit,
  }
}

export default useContactForm
