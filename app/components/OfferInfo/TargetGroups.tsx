'use client'

import ArrowArcRight from 'components/shared/icons/ArrowArcRight'
import { motion, Variants } from 'framer-motion'

const variants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    x: -10,
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.4 + custom * 0.2,
    },
    transformOrigin: 'top left',
  }),
}

const TargetGroups = () => {
  const groups = [
    'Klienci indywidualni',
    'Firmy budowlane i remontowe',
    'Firmy specjalizujące się w produkcji i sprzedaży okien',
    'Dystrybutorzy hurtowi',
  ]

  return (
    <div className="lg:w-2/5">
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
        className="mb-8 text-center text-3xl font-bold sm:text-start lg:text-xl lg:font-medium"
      >
        Do kogo skierowana jest oferta?
      </motion.h2>
      <ul className="space-y-2">
        {groups.map((group, i) => (
          <motion.li
            key={i}
            variants={variants}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="flex items-start gap-2 text-lg font-light lg:text-base"
          >
            <ArrowArcRight
              size={24}
              weight="light"
              className="shrink-0 text-primary-500"
            />
            {group}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default TargetGroups
