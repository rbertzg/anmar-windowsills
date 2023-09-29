import { Popover } from '@headlessui/react'
import OpenMenuIcon from 'components/shared/icons/Menu'

const OpenMobileMenuButton = () => {
  return (
    <Popover.Button className="rounded-md p-1 outline-none duration-200 hover:bg-primary-100 hover:text-primary-500 focus-visible:bg-primary-100 focus-visible:text-primary-500 active:bg-primary-200 lg:hidden">
      <OpenMenuIcon
        size={24}
        weight="bold"
      />
    </Popover.Button>
  )
}

export default OpenMobileMenuButton
