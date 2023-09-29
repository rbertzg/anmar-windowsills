/* eslint-disable react/display-name */
import { Url } from 'next/dist/shared/lib/router/router'
import Link, { LinkProps } from 'next/link'
import { ReactNode, forwardRef } from 'react'

interface TextLinkProps extends LinkProps {
  href: Url
  children: ReactNode
}

const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ href, children, ...rest }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        {...rest}
        className="block rounded-md p-2 text-sm outline-none duration-200 hover:bg-primary-100 hover:text-primary-500 focus-visible:bg-primary-100 focus-visible:text-primary-500 active:bg-primary-200 lg:text-base"
      >
        {children}
      </Link>
    )
  }
)

export default TextLink
