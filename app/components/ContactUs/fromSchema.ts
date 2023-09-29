import { z } from 'zod'

const formSchema = z.object({
  fullName: z
    .string()
    .trim()
    .nonempty({ message: 'Imię i nazwisko jest wymagane' })
    .max(50, {
      message: 'Imię i nazwisko musi składać się maksymalnie z 50 znaków',
    }),
  email: z
    .string()
    .trim()
    .nonempty({ message: 'Adres e-mail jest wymagany' })
    .email({ message: 'Adres e-mail jest nieprawidłowy' }),
  phone: z.union([
    z.literal(''),
    z.string().regex(/^\d{9}$/, {
      message: 'Numer telefonu musi składać się dokładnie z 9 cyfr',
    }),
  ]),
  subject: z.string().trim().nonempty({ message: 'Temat jest wymagany' }),
  message: z
    .string()
    .trim()
    .nonempty({ message: 'Wiadomość jest wymagana' })
    .min(20, {
      message: 'Wiadomość musi składać się z co najmniej 20 znaków',
    }),
  botcheck: z.boolean(),
})

export default formSchema
export type FormValues = z.infer<typeof formSchema>
