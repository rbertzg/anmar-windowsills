'use client'

import { motion } from 'framer-motion'
import CategoryFilter from './CategoryFilter'
import CollectionFilter from './CollectionFilter'

const FilterSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: 0.2,
        },
      }}
      viewport={{ once: true }}
      className="flex flex-col gap-4"
    >
      <CategoryFilter />
      <CollectionFilter />
    </motion.section>
  )
}

export default FilterSection
