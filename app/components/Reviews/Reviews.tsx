'use client'

import Container from 'components/shared/layout/Container'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Slider from './Slider'
import SliderNav from './SliderNav'

const Reviews = () => {
  return (
    <section
      id="opinie"
      className="relative mb-8 pb-24 pt-16"
    >
      <Image
        src="/img/reviews-bg.jpg"
        alt=""
        fill
        aria-hidden="true"
        className="absolute left-0 top-0 -z-10 object-cover opacity-90"
      />
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
            },
          }}
          viewport={{ once: true }}
          className="mb-8 text-center text-3xl font-bold sm:text-start"
        >
          Opinie klientów
        </motion.h2>
        <div className="relative">
          <SliderNav />
          <Slider />
        </div>
      </Container>
    </section>
  )
}

export default Reviews
