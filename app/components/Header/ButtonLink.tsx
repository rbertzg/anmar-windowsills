/* eslint-disable react/display-name */
import { Url } from 'next/dist/shared/lib/router/router'
import Link, { LinkProps } from 'next/link'
import { ReactNode, forwardRef } from 'react'

interface ButtonLinkProps extends LinkProps {
  href: Url
  children: ReactNode
}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ href, children, ...rest }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        {...rest}
        className="block rounded-md bg-primary-500 px-4 py-2 text-center text-sm text-white shadow outline-none duration-200 hover:bg-primary-400 focus-visible:bg-primary-400 active:bg-primary-600"
      >
        {children}
      </Link>
    )
  }
)

export default ButtonLink
