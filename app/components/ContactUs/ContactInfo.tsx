'use client'

import EnvelopeIcon from 'components/shared/icons/Envelope'
import FacebookLogoIcon from 'components/shared/icons/FacebookLogo'
import MapPinIcon from 'components/shared/icons/MapPin'
import PhoneIcon from 'components/shared/icons/Phone'
import { Variants, motion } from 'framer-motion'

const variants: Variants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4 + custom * 0.15,
    },
  }),
}

const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-between gap-5">
      <address className="flex flex-col gap-5 not-italic">
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="flex items-center gap-2"
        >
          <PhoneIcon
            size={24}
            weight="thin"
          />
          <span className="text-sm font-light">514 736 809</span>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="flex items-center gap-2"
        >
          <EnvelopeIcon
            size={24}
            weight="thin"
          />
          <span className="text-sm font-light">parapety-anmar@wp.pl</span>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="flex items-center gap-2"
        >
          <MapPinIcon
            size={24}
            weight="thin"
          />
          <span className="text-sm font-light">Fermowa 2, Stawiguda</span>
        </motion.div>
      </address>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
      >
        <a
          href="https://www.facebook.com/people/AN-MAR-Parapety/100076041576321/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-light outline-none duration-200 hover:opacity-70 focus-visible:opacity-60"
        >
          <FacebookLogoIcon
            size={24}
            weight="fill"
            className="text-primary-500"
          />
          Facebook
        </a>
      </motion.div>
    </div>
  )
}

export default ContactInfo
