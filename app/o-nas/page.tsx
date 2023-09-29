import AboutUs from 'components/AboutUs/AboutUs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AN-MAR Parapety | O nas',
  description:
    'Zapraszamy do odkrycia bogatej oferty parapetów AN-MAR - wiodącego producenta i sprzedawcy parapetów zewnętrznych, parapetów wewnętrznych oraz okien.',
}

const AboutUsPage = () => {
  return <AboutUs />
}

export default AboutUsPage
