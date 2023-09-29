'use client'

import InfoIcon from 'components/shared/icons/Info'
import collectionDescriptions from 'data/collectionDescriptions'
import { AnimatePresence, motion } from 'framer-motion'
import { useFilterContext } from './FilterContext'

const CollectionInfo = () => {
  const { filters } = useFilterContext()

  const getCollectionInfo = () => {
    if (filters.category === 'Parapety wewnętrzne') {
      return collectionDescriptions[filters.category][filters.collection]
    } else {
      return collectionDescriptions[filters.category][filters.collection]
    }
  }

  const collectionInfo = getCollectionInfo()

  return (
    <AnimatePresence>
      <motion.div
        key={filters.collection}
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
        className="my-12 rounded-md border border-gray-300 bg-white px-5 py-4"
      >
        <h2 className="flex gap-2 text-lg text-primary-500">
          <InfoIcon
            size={28}
            weight="fill"
            className="shrink-0"
          />
          {filters.collection}
        </h2>
        {collectionInfo.map((info, i) => (
          <p
            key={i}
            className="mt-5 font-light leading-relaxed"
          >
            {info}
          </p>
        ))}
        <span className="mt-5 block text-sm font-medium">
          W rzeczywistości kolor może nieznacznie się różnić od tych
          zaprezentowanych na zdjęciach ze względu na oświetlenie oraz czynniki
          naturalne.
        </span>
      </motion.div>
    </AnimatePresence>
  )
}

export default CollectionInfo
