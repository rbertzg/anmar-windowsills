/* eslint-disable tailwindcss/no-custom-classname */
'use client'

import XIcon from 'components/shared/icons/X'
import { Windowsill } from 'data/products'
import Image from 'next/image'
import { CSSProperties } from 'react'
import { Navigation, Pagination, Zoom } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/zoom'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductSliderNav from './ProductSliderNav'

interface ProductSliderProps {
  products: Windowsill[]
  openedSlide: number
  onClose: () => void
}

const ProductSlider = ({
  products,
  openedSlide,
  onClose,
}: ProductSliderProps) => {
  return (
    <div className="fixed inset-0 z-10 bg-gray-950/80 backdrop-blur">
      <div className="fixed inset-x-0 inset-y-[76px] z-20">
        <ProductSliderNav />
        <Swiper
          onSwiper={(swiper) => swiper.slideTo(openedSlide)}
          modules={[Navigation, Pagination, Zoom]}
          navigation={{
            nextEl: '.next-product-btn',
            prevEl: '.prev-product-btn',
          }}
          pagination={{ clickable: true }}
          zoom
          slidesPerView={1}
          spaceBetween={64}
          loop
          className="h-full"
          style={
            {
              '--swiper-theme-color': '#fff',
              '--swiper-pagination-bullet-inactive-color': '#fff',
            } as CSSProperties
          }
        >
          {products.map(({ img, desc, color }, i) => (
            <SwiperSlide key={i}>
              <div className="swiper-zoom-container relative">
                <Image
                  src={img}
                  alt={desc}
                  priority
                  fill
                  className="object-contain"
                />
              </div>
              <p className="absolute inset-x-0 bottom-10 z-30 text-center text-lg font-light text-white">
                {color}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-30 rounded-md text-white outline-none hover:bg-white/20 focus-visible:bg-white/20"
        >
          <XIcon
            size={36}
            weight="light"
          />
        </button>
      </div>
    </div>
  )
}

export default ProductSlider
