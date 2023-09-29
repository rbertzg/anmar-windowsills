import FindUsOnTheMap from 'components/LocationInfo/FindUsOnTheMap'
import OpeningHours from 'components/LocationInfo/OpeningHours'
import Container from 'components/shared/layout/Container'

const LocationInfo = () => {
  return (
    <section className="pb-24 pt-16">
      <Container>
        <div className="flex flex-col gap-x-8 gap-y-24 lg:flex-row-reverse">
          <FindUsOnTheMap />
          <OpeningHours />
        </div>
      </Container>
    </section>
  )
}

export default LocationInfo
