'use client'

import Container from 'components/shared/layout/Container'
import FilterContextProvider from './FilterContext'
import FilterSection from './FilterSection'
import ProductList from './ProductList'

const Products = () => {
  return (
    <div className="pb-24 pt-16">
      <Container>
        <FilterContextProvider>
          <FilterSection />
          <ProductList />
        </FilterContextProvider>
      </Container>
    </div>
  )
}

export default Products
