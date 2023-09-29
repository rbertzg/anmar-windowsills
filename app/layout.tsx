import Header from 'components/Header/Header'
import TemporaryInfo from 'components/TemporaryInfo/TemporaryInfo'
import 'globals.css'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'

const font = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'AN-MAR Parapety',
  description:
    'Zapraszamy do odkrycia bogatej oferty parapetów AN-MAR - wiodącego producenta i sprzedawcy parapetów zewnętrznych, parapetów wewnętrznych oraz okien.',
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="pl">
      <body className={`${font.className} bg-gray-50 text-gray-800`}>
        <TemporaryInfo />
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
