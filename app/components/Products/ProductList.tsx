'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import CollectionInfo from './CollectionInfo'
import { useFilterContext } from './FilterContext'
import ProductSlider from './ProductSlider'
import Windowsill from './Windowsill'

const ProductList = () => {
  const {
    filteredProducts,
    filters: { collection },
  } = useFilterContext()

  const [isFullscreen, setIsFullscreen] = useState(false)
  const [openedSlide, setOpenedSlide] = useState(0)

  const handleShowSlider = (imgIndex: number) => {
    setIsFullscreen(true)
    setOpenedSlide(imgIndex)
  }

  const handleExitFullscreen = () => {
    setIsFullscreen(false)
  }

  return (
    <main className="mt-8">
      <CollectionInfo />
      <motion.p
        key={collection}
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
        className="text-center text-primary-500"
      >
        Znaleziono {filteredProducts.length} przedmiotów
      </motion.p>
      {isFullscreen && (
        <ProductSlider
          products={filteredProducts}
          openedSlide={openedSlide}
          onClose={handleExitFullscreen}
        />
      )}
      <AnimatePresence>
        <ul
          key={collection}
          className="my-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {filteredProducts.map(({ img, desc }, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 200 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                },
              }}
              exit={{
                opacity: 0,
                y: 400,
                transition: {
                  duration: 0.6,
                },
              }}
              viewport={{ once: true }}
            >
              <Windowsill
                key={i}
                img={img}
                desc={desc}
                onShowSlider={() => handleShowSlider(i)}
              />
            </motion.li>
          ))}
        </ul>
      </AnimatePresence>
    </main>
  )
}

export default ProductList
