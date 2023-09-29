import ArrowRight from 'components/shared/icons/ArrowRight'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ProductsLink = () => {
  const MotionLink = motion(Link)

  return (
    <MotionLink
      href="/parapety"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay: 0.4,
        },
      }}
      viewport={{ once: true }}
      className="flex items-center gap-2 border-b-2 border-b-primary-500/0 px-2 pb-1 font-medium text-primary-500 mix-blend-multiply outline-none duration-200 hover:translate-x-2 focus-visible:border-b-primary-500/100 sm:pl-0"
    >
      Odkryj ofertę
      <ArrowRight
        size={24}
        weight="regular"
      />
    </MotionLink>
  )
}

export default ProductsLink
