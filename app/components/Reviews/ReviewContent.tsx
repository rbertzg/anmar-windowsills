'use client'

import { motion } from 'framer-motion'
import useReadMore from './useReadMore'
interface ReviewContentProps {
  review: string
}

const ReviewContent = ({ review }: ReviewContentProps) => {
  const lineHeight = 24
  const lineClamp = 4
  const defaultContentHeight = lineHeight * lineClamp

  const { elementRef, isContentTooLarge, isCollapsed, toggleCollapse } =
    useReadMore<HTMLParagraphElement>(defaultContentHeight)

  return (
    <>
      <motion.p
        layout
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 14,
          duration: 0.2,
        }}
        ref={elementRef}
        className={`mt-3 font-light ${
          isContentTooLarge && isCollapsed ? 'line-clamp-4' : ''
        }`}
      >
        {review}
      </motion.p>
      {isContentTooLarge && (
        <button
          onClick={toggleCollapse}
          className="-ml-0.5 mt-0.5 rounded p-0.5 text-sm font-medium outline-none hover:text-gray-800/60 focus-visible:text-gray-800/60 focus-visible:ring-2 focus-visible:ring-gray-800/60"
        >
          {isCollapsed ? 'Czytaj więcej...' : 'Czytaj mniej...'}
        </button>
      )}
    </>
  )
}

export default ReviewContent
