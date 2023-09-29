'use client'

import { RadioGroup } from '@headlessui/react'
import { useFilterContext } from './FilterContext'

const CategoryFilter = () => {
  const { filters, updateFilterValue } = useFilterContext()

  return (
    <RadioGroup
      value={filters.category}
      onChange={(value) => {
        updateFilterValue({ name: 'category', value })
      }}
    >
      <RadioGroup.Label className="sr-only">Kategoria</RadioGroup.Label>
      <div className="flex">
        <RadioGroup.Option
          as="button"
          value="Parapety wewnętrzne"
          className="basis-1/2 outline-none"
        >
          {({ checked }) => (
            <span
              className={`flex h-full items-center justify-center rounded-l-md px-4 py-2 text-sm shadow duration-200 lg:text-base
               ${
                 checked
                   ? 'bg-primary-500 text-white'
                   : 'bg-white ring-1 ring-inset ring-gray-300 hover:bg-primary-100 hover:ring-primary-300'
               }`}
            >
              Parapety wewnętrzne
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option
          as="button"
          value="Parapety zewnętrzne"
          className="group basis-1/2 outline-none"
        >
          {({ checked }) => (
            <span
              className={`flex h-full items-center justify-center rounded-r-md px-4 py-2 text-sm shadow outline-none duration-200 lg:text-base
               ${
                 checked
                   ? 'bg-primary-500 text-white'
                   : 'bg-white ring-1 ring-inset ring-gray-300 hover:bg-primary-100 hover:ring-primary-300'
               }`}
            >
              Parapety zewnętrzne
            </span>
          )}
        </RadioGroup.Option>
      </div>
    </RadioGroup>
  )
}

export default CategoryFilter
