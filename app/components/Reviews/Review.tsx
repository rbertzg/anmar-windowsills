'use client'

import { motion } from 'framer-motion'
import ReviewContent from './ReviewContent'
import ReviewHeader from './ReviewHeader'
export interface ReviewProps {
  reviewer: string
  review: string
  rating: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
}

const Review = ({ reviewer, review, rating }: ReviewProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.3,
        },
      }}
      className="mb-2 rounded-md bg-gray-100/70 p-4 shadow"
    >
      <ReviewHeader
        reviewer={reviewer}
        rating={rating}
      />
      <ReviewContent review={review} />
    </motion.article>
  )
}

export default Review
