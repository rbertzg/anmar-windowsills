'use client'

import { RadioGroup } from '@headlessui/react'
import { externalCollections, internalCollections } from 'data/products'
import { Navigation } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import CollectionFilterSwiperNav from './CollectionFilterSwiperNav'
import { useFilterContext } from './FilterContext'

const CollectionFilter = () => {
  const { filters, updateFilterValue } = useFilterContext()

  const collections =
    filters.category === 'Parapety wewnętrzne'
      ? internalCollections
      : externalCollections

  const swiperParams: SwiperOptions = {
    modules: [Navigation],
    navigation: {
      prevEl: '.prev-collection-btn',
      nextEl: '.next-collection-btn',
    },
    slidesPerView: 2,
    breakpoints: {
      640: {
        slidesPerView: collections.length > 3 ? 4 : collections.length,
      },
    },
  }

  return (
    <RadioGroup
      value={filters.collection}
      onChange={(value) => {
        updateFilterValue({ name: 'collection', value })
      }}
    >
      <RadioGroup.Label className="sr-only">Kolekcja</RadioGroup.Label>
      <div className="relative">
        <CollectionFilterSwiperNav />
        <Swiper
          key={filters.category}
          {...swiperParams}
        >
          {collections.map((collection, i) => (
            <SwiperSlide
              key={i}
              className="!h-auto"
            >
              <RadioGroup.Option
                as="button"
                value={collection}
                className="h-full w-full outline-none"
              >
                {({ checked }) => (
                  <span
                    className={`flex h-full cursor-pointer items-center justify-center border-y px-4 py-2 text-sm shadow outline-none duration-200
                    ${
                      i === 0
                        ? 'rounded-l-md border-l'
                        : i === collections.length - 1
                        ? 'rounded-r-md border-x'
                        : 'border-l'
                    }
                  ${
                    checked
                      ? 'border-primary-300 bg-primary-100 text-primary-500'
                      : 'border-gray-300 bg-white hover:border-primary-300 hover:bg-primary-50'
                  }
                  `}
                  >
                    {collection}
                  </span>
                )}
              </RadioGroup.Option>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </RadioGroup>
  )
}

export default CollectionFilter
