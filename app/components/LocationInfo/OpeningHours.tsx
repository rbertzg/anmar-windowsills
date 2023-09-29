'use client'

import { Variants, motion } from 'framer-motion'

const variants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    y: -10,
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4 + custom * 0.15,
    },
    transformOrigin: 'top left',
  }),
}

const OpeningHours = () => {
  const hours = [
    {
      day: 'Poniedziałek',
      hours: '07:00 - 15:00',
    },
    {
      day: 'Wtorek',
      hours: '07:00 - 15:00',
    },
    {
      day: 'Środa',
      hours: '07:00 - 15:00',
    },
    {
      day: 'Czwartek',
      hours: '07:00 - 15:00',
    },
    {
      day: 'Piątek',
      hours: '07:00 - 15:00',
    },
    {
      day: 'Sobota',
      hours: 'Zamknięte',
    },
    {
      day: 'Niedziela',
      hours: 'Zamknięte',
    },
  ]

  return (
    <div className="basis-1/3">
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
        className="mx-auto mb-8 max-w-max bg-primary-200 p-1 text-3xl font-bold sm:ml-0 sm:mr-auto lg:-mt-1 lg:px-5 lg:text-xl lg:font-medium"
      >
        Godziny otwarcia
      </motion.h2>
      <ul className="space-y-2.5">
        {hours.map(({ day, hours }, i) => (
          <motion.li
            key={i}
            variants={variants}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="flex justify-between rounded-md bg-gray-200 px-4 py-3 shadow"
          >
            <span>{day}</span>
            <span>{hours}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default OpeningHours
