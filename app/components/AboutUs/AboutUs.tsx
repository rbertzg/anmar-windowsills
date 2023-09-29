'use client'

import Footer from 'components/Footer/Footer'
import Container from 'components/shared/layout/Container'
import { motion } from 'framer-motion'
import Image from 'next/image'
import img from '/public/img/laureat-konkursu.png'

const AboutUs = () => {
  const MotionImage = motion(Image)

  return (
    <>
      <div className="mb-24 mt-16">
        <Container>
          <div
            className="absolute inset-0 -z-10 overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="relative top-20 h-full w-[40rem] rotate-90 bg-gray-200 bg-gradient-to-tr from-primary-200 to-primary-300 opacity-30 lg:w-full lg:rotate-0"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            ></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.2,
              },
            }}
            viewport={{ once: true }}
          >
            <h1 className="mb-8 text-center text-4xl font-bold lg:text-start">
              O nas
            </h1>
            <div className="flex flex-col items-center justify-between gap-8  lg:flex-row lg:items-start">
              <div className="max-w-prose space-y-4 text-center text-lg font-light leading-relaxed lg:text-start">
                <p>
                  Firma AN-MAR powstała na początku 2020 roku z inicjatywy osób
                  posiadających wieloletnie doświadczenie w branży. Nasza oferta
                  obejmuje różnorodne parapety zewnętrzne, wykonane zarówno ze
                  stali, aluminium, jak i granitu oraz kwarcu. W zakresie
                  parapetów wewnętrznych proponujemy bogaty wybór materiałów,
                  takich jak konglomerat, marmur, granit, kwarc, MDF i PCV.
                </p>
                <p>
                  Świadczymy usługi dostawy naszych produktów do naszych
                  kontrahentów nawet w promieniu około 350 kilometrów od naszej
                  siedziby w Stawigudzie. Zapewniamy sprawne i terminowe
                  dostawy, aby zagwarantować naszym klientom wygodę i
                  zadowolenie z naszych usług.
                </p>
                <p>
                  Dzięki zaufaniu naszych klientów w roku 2023 otrzymaliśmy
                  tytuł laureata Orłów Biznesu za rok 2022 w kategorii
                  &quot;Orły Okien i Drzwi&quot;
                </p>
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.orlyokienidrzwi.pl/profile-528916-an-mar-parapety"
              >
                <MotionImage
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transformOrigin: 'right',
                    transition: {
                      duration: 0.6,
                      delay: 0.6,
                    },
                  }}
                  viewport={{ once: true }}
                  src={img}
                  width={280}
                  height={316}
                  alt="Laureat konkursu w zestawieniu Orły Okien i Drzwi"
                  className="shrink-0"
                />
              </a>
            </div>
          </motion.div>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs
