'use client'
import Discount from 'components/shared/icons/Discount'
import Package from 'components/shared/icons/Package'
import Sparkle from 'components/shared/icons/Sparkle'
import Toolbox from 'components/shared/icons/Toolbox'
import { motion, Variants } from 'framer-motion'
import AdvantageCard from './AdvantageCard'

const variants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.4 + custom * 0.2,
    },
  }),
}

const WhyUs = () => {
  return (
    <div className="basis-3/5">
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
        className="mx-auto mb-8 max-w-max bg-primary-200 p-1 text-3xl font-bold sm:ml-0 sm:mr-auto lg:-mt-1 lg:ml-auto lg:mr-0 lg:px-5 lg:text-xl lg:font-medium"
      >
        Co nas wyróżnia?
      </motion.h2>
      <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <motion.li
          variants={variants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <AdvantageCard
            title="Jakość wykonania"
            description="Dbamy o najwyższą jakość oferowanych produktów i usług"
            icon={Sparkle}
          />
        </motion.li>
        <motion.li
          variants={variants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <AdvantageCard
            title="Terminowe dostawy"
            description="Zapewniamy terminowe dostawy zgodnie z ustalonym harmonogramem"
            icon={Package}
          />
        </motion.li>
        <motion.li
          variants={variants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <AdvantageCard
            title="Doradztwo technologiczne"
            description="Gwarantujemy profesjonalne wsparcie w wyborze produktów, które w pełni spełnią Państwa oczekiwania"
            icon={Toolbox}
          />
        </motion.li>
        <motion.li
          variants={variants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <AdvantageCard
            title="Rabaty"
            description="Oferujemy atrakcyjne zniżki dla naszych stałych klientów"
            icon={Discount}
          />
        </motion.li>
      </ul>
    </div>
  )
}

export default WhyUs
