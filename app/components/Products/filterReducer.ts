import { Windowsill } from 'data/products'

type Filters =
  | {
      category: 'Parapety wewnętrzne'
      collection:
        | 'Parapety MDF'
        | 'Parapety PCV'
        | 'Parapety syntetyczne'
        | 'Parapety granitowe'
        | 'Parapety kwarcowe'
        | 'Parapety marmurowe'
    }
  | {
      category: 'Parapety zewnętrzne'
      collection:
        | 'Parapety aluminiowe'
        | 'Parapety stalowe'
        | 'Parapety syntetyczne'
    }

type CategoryFilter = {
  name: 'category'
  value: 'Parapety wewnętrzne' | 'Parapety zewnętrzne'
}

type CollectionFilter = {
  name: 'collection'
  value:
    | 'Parapety MDF'
    | 'Parapety PCV'
    | 'Parapety syntetyczne'
    | 'Parapety granitowe'
    | 'Parapety kwarcowe'
    | 'Parapety marmurowe'
    | 'Parapety aluminiowe'
    | 'Parapety stalowe'
}

export type FilterPayload = CategoryFilter | CollectionFilter

type FilterAction =
  | {
      type: 'UPDATE_FILTERS_VALUE'
      payload: FilterPayload
    }
  | { type: 'FILTER_PRODUCTS' }

export interface FilterState {
  allProducts: Windowsill[]
  filteredProducts: Windowsill[]
  filters: Filters
}

const reducer = (state: FilterState, action: FilterAction) => {
  switch (action.type) {
    case 'UPDATE_FILTERS_VALUE':
      const { name, value } = action.payload

      let updatedFilters = { ...state.filters }

      if (name === 'category' && value === 'Parapety wewnętrzne') {
        updatedFilters = {
          ...updatedFilters,
          category: value,
          collection: 'Parapety syntetyczne',
        }
      } else if (name === 'category' && value === 'Parapety zewnętrzne') {
        updatedFilters = {
          ...updatedFilters,
          category: value,
          collection: 'Parapety aluminiowe',
        }
      } else {
        updatedFilters = {
          ...updatedFilters,
          [name]: value,
        }
      }

      return {
        ...state,
        filters: updatedFilters,
      }

    case 'FILTER_PRODUCTS':
      const { allProducts } = state
      let tempFilteredProducts = [...allProducts]

      const { category, collection } = state.filters

      if (category) {
        tempFilteredProducts = tempFilteredProducts.filter(
          (product) => product.category === category
        )
      }

      if (collection) {
        tempFilteredProducts = tempFilteredProducts.filter(
          (product) => product.collection === collection
        )
      }

      return {
        ...state,
        filteredProducts: tempFilteredProducts,
      }

    default:
      return state
  }
}

export default reducer
