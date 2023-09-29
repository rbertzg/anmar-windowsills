import { Popover } from '@headlessui/react'
import CloseMobileMenuButton from './CloseMobileMenuButton'
import MobileContactMenu from './MobileContactMenu'
import TextLink from './TextLink'

const MobileMenu = () => {
  return (
    <>
      <Popover.Overlay className="fixed inset-0 z-10 bg-gray-950/20 backdrop-blur lg:hidden" />
      <Popover.Panel className="fixed inset-5 z-20 lg:hidden">
        <div className="mx-auto max-h-full max-w-screen-md overflow-auto rounded-md bg-white shadow">
          <div className="flex items-center justify-between px-7 pt-5">
            <h2 className="text-xs">Nawigacja</h2>
            <CloseMobileMenuButton />
          </div>
          <ul className="flex flex-col gap-1 p-5">
            <li>
              <Popover.Button
                as={TextLink}
                href="/"
              >
                Strona główna
              </Popover.Button>
            </li>
            <li>
              <Popover.Button
                as={TextLink}
                href="/o-nas"
              >
                O nas
              </Popover.Button>
            </li>
            <li>
              <Popover.Button
                as={TextLink}
                href="/parapety"
              >
                Parapety
              </Popover.Button>
            </li>
            <li>
              <Popover.Button
                as={TextLink}
                href="/#opinie"
              >
                Opinie
              </Popover.Button>
            </li>
          </ul>
          <MobileContactMenu />
        </div>
      </Popover.Panel>
    </>
  )
}

export default MobileMenu
