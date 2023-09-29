'use client'
import Container from 'components/shared/layout/Container'
import { motion, Variants } from 'framer-motion'
import Background from './Background'
import ProductsLink from './ProductsLink'

const container: Variants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const item: Variants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.2,
    },
  }),
}

const Hero = () => {
  return (
    <section>
      <Container>
        <motion.div
          variants={container}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex flex-col items-center gap-6 pt-24 sm:items-start"
        >
          <Background />
          <motion.h1
            variants={item}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="max-w-[32ch] text-center text-4xl font-bold mix-blend-luminosity sm:text-start"
          >
            Podkreśl piękno i harmonię Twojej przestrzeni wyjątkowymi parapetami
          </motion.h1>
          <motion.p
            variants={item}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="max-w-prose text-center text-lg font-light mix-blend-multiply sm:text-start"
          >
            Dzięki naszym parapetom nie tylko poprawisz izolację termiczną i
            akustyczną swojego wnętrza, ale także nadasz mu elegancki wygląd i
            unikalny charakter. Dbamy o każdy szczegół, abyś mógł cieszyć się
            doskonałym produktem, który będzie trwały i funkcjonalny przez lata.
          </motion.p>
          <ProductsLink />
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
