import { Popover } from '@headlessui/react'
import Envelope from 'components/shared/icons/Envelope'
import MapPin from 'components/shared/icons/MapPin'
import Phone from 'components/shared/icons/Phone'
import ButtonLink from './ButtonLink'
import ContactLink from './ContactLink'
const MobileContactMenu = () => {
  return (
    <ul className="grid grid-cols-1 gap-3 border-t border-t-gray-300 p-5 md:grid-cols-3">
      <li>
        <ContactLink
          text="Zadzwoń do nas"
          text2="514 736 809"
          href="tel:+48514736809"
          icon={Phone}
        />
      </li>
      <li>
        <ContactLink
          text="Napisz do nas"
          text2="parapety-anmar@wp.pl"
          href="mailto:parapety-anmar@wp.pl"
          icon={Envelope}
        />
      </li>
      <li>
        <ContactLink
          text="Odwiedź nas"
          text2="Fermowa 2, Stawiguda"
          href="https://goo.gl/maps/Wdffi4wd7QR8SFai8"
          icon={MapPin}
          target="_blank"
          rel="noreferrer"
        />
      </li>
      <li className="md:col-span-3">
        <Popover.Button
          as={ButtonLink}
          href="/#formularz-kontaktowy"
        >
          Skontaktuj się z nami
        </Popover.Button>
      </li>
    </ul>
  )
}

export default MobileContactMenu
