/* eslint-disable tailwindcss/no-custom-classname */
import ArrowLeftIcon from 'components/shared/icons/ArrowLeft'
import ArrowRightIcon from 'components/shared/icons/ArrowRight'

const ProductSliderNav = () => {
  return (
    <>
      <button
        type="button"
        className="prev-product-btn absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-md text-white outline-none hover:bg-white/20 focus-visible:bg-white/20"
      >
        <ArrowLeftIcon
          size={36}
          weight="light"
        />
      </button>
      <button
        type="button"
        className="next-product-btn absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-md text-white outline-none hover:bg-white/20 focus-visible:bg-white/20"
      >
        <ArrowRightIcon
          size={36}
          weight="light"
        />
      </button>
    </>
  )
}

export default ProductSliderNav
