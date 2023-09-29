'use client'

import Container from 'components/shared/layout/Container'
import { motion } from 'framer-motion'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const ContactUs = () => {
  return (
    <section
      id="formularz-kontaktowy"
      className="pb-24 pt-16"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: 0.2,
            },
          }}
          viewport={{ once: true }}
          className="mb-8 text-center text-3xl font-bold sm:text-start"
        >
          Skontaktuj się z nami
        </motion.h2>
        <div className="items-stretch justify-between gap-8 lg:flex">
          <ContactInfo />
          <hr className="my-8 border-primary-200 lg:hidden" />
          <ContactForm />
        </div>
      </Container>
    </section>
  )
}

export default ContactUs
