/* eslint-disable tailwindcss/no-custom-classname */
import ArrowLeftIcon from 'components/shared/icons/ArrowLeft'
import ArrowRightIcon from 'components/shared/icons/ArrowRight'

const CollectionFilterSwiperNav = () => {
  return (
    <>
      <button
        type="button"
        className="prev-collection-btn absolute -left-12 top-1/2 z-10 hidden -translate-y-1/2 rounded-full p-1 text-primary-500 outline-none duration-200 hover:bg-gray-200 focus-visible:bg-gray-200 disabled:hidden lg:block"
      >
        <ArrowLeftIcon
          size={28}
          weight="thin"
        />
      </button>
      <button
        type="button"
        className="next-collection-btn absolute -right-12 top-1/2 z-10 hidden -translate-y-1/2 rounded-full p-1 text-primary-500 outline-none duration-200 hover:bg-gray-200 focus-visible:bg-gray-200 disabled:hidden lg:block"
      >
        <ArrowRightIcon
          size={28}
          weight="thin"
        />
      </button>
    </>
  )
}

export default CollectionFilterSwiperNav
