import { Icon } from '@phosphor-icons/react'
import { ComponentPropsWithoutRef } from 'react'

interface ContactLinkProps extends ComponentPropsWithoutRef<'a'> {
  text: string
  text2: string
  href: string
  icon: Icon
}

const ContactLink = ({
  text,
  text2,
  href,
  icon: Icon,
  ...rest
}: ContactLinkProps) => {
  return (
    <a
      href={href}
      className="flex items-center gap-2 rounded-md bg-gray-100 p-2 shadow outline-none duration-200 hover:bg-primary-100 hover:text-primary-500 focus-visible:bg-primary-100 focus-visible:text-primary-500 active:bg-primary-200"
      {...rest}
    >
      <Icon
        size={32}
        weight="light"
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold">{text}</span>
        <span className="text-xs">{text2}</span>
      </div>
    </a>
  )
}

export default ContactLink
