import Container from 'components/shared/layout/Container'
import TargetGroups from './TargetGroups'
import WhyUs from './WhyUs'

const OfferInfo = () => {
  return (
    <section className="pb-24 pt-36">
      <Container>
        <div className="flex flex-col gap-x-8 gap-y-24 lg:flex-row">
          <TargetGroups />
          <WhyUs />
        </div>
      </Container>
    </section>
  )
}

export default OfferInfo
