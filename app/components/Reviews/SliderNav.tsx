/* eslint-disable tailwindcss/no-custom-classname */
import ArrowCircleLeft from 'components/shared/icons/ArrowCircleLeft'
import ArrowCircleRight from 'components/shared/icons/ArrowCircleRight'

const SliderNav = () => {
  return (
    <>
      <button
        type="button"
        className="prev-slide-btn absolute -left-12 top-1/2 z-10 hidden -translate-y-1/2 text-primary-500 outline-none hover:text-primary-400 focus-visible:text-primary-400 active:text-primary-600 lg:block"
      >
        <ArrowCircleLeft
          size={36}
          weight="fill"
        />
      </button>
      <button
        type="button"
        className="next-slide-btn absolute -right-12 top-1/2 z-10 hidden -translate-y-1/2 text-primary-500 outline-none hover:text-primary-400 focus-visible:text-primary-400 active:text-primary-600 lg:block"
      >
        <ArrowCircleRight
          size={36}
          weight="fill"
        />
      </button>
    </>
  )
}

export default SliderNav
