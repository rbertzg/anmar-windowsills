'use client'

import { Popover } from '@headlessui/react'
import Container from 'components/shared/layout/Container'
import { motion } from 'framer-motion'
import DesktopMenu from './DesktopMenu'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import OpenMobileMenuButton from './OpenMobileMenuButton'

const Navbar = () => {
  return (
    <Popover as="nav">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
            },
          }}
          viewport={{ once: true }}
          className="flex items-center justify-between py-5"
        >
          <Logo />
          <DesktopMenu />
          <OpenMobileMenuButton />
        </motion.div>
      </Container>
      <MobileMenu />
    </Popover>
  )
}

export default Navbar
