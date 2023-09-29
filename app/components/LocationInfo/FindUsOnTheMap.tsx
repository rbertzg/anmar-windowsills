'use client'

import { motion } from 'framer-motion'

const FindUsOnTheMap = () => {
  return (
    <div className="flex basis-2/3 flex-col">
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
        className="mb-8 text-center text-3xl font-bold sm:text-start lg:text-end lg:text-xl lg:font-medium"
      >
        Znajdź nas na mapie
      </motion.h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d75695.28005997061!2d20.393440179744637!3d53.63845749977555!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471d8340cded69fd%3A0x28143da921447ebf!2sANMAR%20Parapety!5e0!3m2!1spl!2spl!4v1690033761396!5m2!1spl!2spl"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[24rem] rounded-md shadow lg:h-full"
      ></iframe>
    </div>
  )
}

export default FindUsOnTheMap
