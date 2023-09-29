import windowsills from 'data/products'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import reducer, { FilterPayload, FilterState } from './filterReducer'

interface FilterContextProps {
  children: ReactNode
}

interface FilterContextType extends FilterState {
  updateFilterValue: (payload: FilterPayload) => void
}

const FilterContext = createContext<FilterContextType | null>(null)

const initialState: FilterState = {
  allProducts: windowsills,
  filteredProducts: [],
  filters: {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
  },
}

const FilterContextProvider = ({ children }: FilterContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const updateFilterValue = (payload: FilterPayload) => {
    dispatch({ type: 'UPDATE_FILTERS_VALUE', payload })
  }

  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' })
  }, [state.filters])

  return (
    <FilterContext.Provider value={{ ...state, updateFilterValue }}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContextProvider

export const useFilterContext = () => {
  const context = useContext(FilterContext)

  if (!context) {
    throw new Error(
      'useFilterContext must be used within a FilterContextProvider'
    )
  }

  return context
}
