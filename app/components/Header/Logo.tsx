import CompanyLogo from 'components/shared/logo/Logo'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link
      href="/"
      className="rounded outline-none duration-200 hover:translate-x-1  focus-visible:translate-x-1 focus-visible:text-primary-500"
    >
      <CompanyLogo />
    </Link>
  )
}

export default Logo
