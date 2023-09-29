'use client'

import { Variants, motion } from 'framer-motion'
import FormField from './FormField'
import SubmissionFeedback from './SubmissionFeedback'
import SubmitButton from './SubmitButton'
import useContactForm from './useContactForm'

const variants: Variants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4 + custom * 0.15,
    },
  }),
}

const ContactForm = () => {
  const {
    register,
    onSubmit,
    errors,
    isSubmitting,
    isSentSuccessfully,
    handleCloseSubmissionFeedback,
  } = useContactForm()

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="flex basis-2/3 flex-col gap-5 font-light"
    >
      {isSentSuccessfully !== undefined && (
        <SubmissionFeedback
          isSentSuccessfully={isSentSuccessfully}
          onClose={handleCloseSubmissionFeedback}
        />
      )}
      <motion.p
        variants={variants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="text-sm text-primary-500 lg:hidden"
      >
        Wymagane pola zostały oznaczone gwiazdką (*)
      </motion.p>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <FormField
          label="Imię i nazwisko"
          name="fullName"
          type="text"
          required
          disabled={isSubmitting}
          error={errors.fullName}
          register={register}
        />
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        <FormField
          label="Adres e-mail"
          name="email"
          type="email"
          required
          disabled={isSubmitting}
          error={errors.email}
          register={register}
        />
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
      >
        <FormField
          label="Numer telefonu"
          name="phone"
          type="tel"
          disabled={isSubmitting}
          error={errors.phone}
          register={register}
        />
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
      >
        <FormField
          label="Temat"
          name="subject"
          type="text"
          required
          disabled={isSubmitting}
          error={errors.subject}
          register={register}
        />
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
      >
        <FormField
          label="Wiadomość"
          name="message"
          required
          textarea
          disabled={isSubmitting}
          error={errors.message}
          register={register}
        />
      </motion.div>
      <input
        type="checkbox"
        {...register('botcheck')}
        className="hidden"
      />
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        custom={5}
        className="flex items-center justify-between"
      >
        <p className="hidden text-sm text-primary-400 lg:block">
          Wymagane pola zostały oznaczone gwiazdką (*)
        </p>
        <SubmitButton isSubmitting={isSubmitting} />
      </motion.div>
    </form>
  )
}

export default ContactForm
