import Footer from 'components/Footer/Footer'
import Products from 'components/Products/Products'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AN-MAR Parapety | Oferta',
  description:
    'Zapraszamy do odkrycia bogatej oferty parapetów AN-MAR - wiodącego producenta i sprzedawcy parapetów zewnętrznych, parapetów wewnętrznych oraz okien.',
}

const ProductsPage = () => {
  return (
    <>
      <Products />
      <Footer />
    </>
  )
}

export default ProductsPage
