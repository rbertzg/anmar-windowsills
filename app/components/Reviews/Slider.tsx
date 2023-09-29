'use client'

import reviews from 'data/reviews'
import { Navigation } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Review from './Review'

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        prevEl: '.prev-slide-btn',
        nextEl: '.next-slide-btn',
      }}
      slidesPerView={1}
      spaceBetween={32}
      loop
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
    >
      {reviews.map(({ reviewer, review, rating }, i) => (
        <SwiperSlide key={i}>
          <Review
            reviewer={reviewer}
            review={review}
            rating={rating}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
