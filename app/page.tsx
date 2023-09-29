import Footer from 'components/Footer/Footer'
import Hero from 'components/Hero/Hero'
import OfferInfo from 'components/OfferInfo/OfferInfo'
import Reviews from 'components/Reviews/Reviews'
import ContactUs from './components/ContactUs/ContactUs'
import LocationInfo from './components/LocationInfo/LocationInfo'

const Home = () => {
  return (
    <>
      <Hero />
      <OfferInfo />
      <Reviews />
      <LocationInfo />
      <div className="relative">
        <div
          className="absolute inset-0 -z-10 overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative top-20 h-full w-[40rem] rotate-90 bg-gray-200 bg-gradient-to-tr from-primary-200 to-primary-300 opacity-20 lg:w-full lg:rotate-0"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          ></div>
        </div>
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}

export default Home
