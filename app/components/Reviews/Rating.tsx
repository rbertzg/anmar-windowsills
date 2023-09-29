import Star from 'components/shared/icons/Star'
import StarHalf from 'components/shared/icons/StarHalf'

interface RatingProps {
  rating: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
}

const Rating = ({ rating }: RatingProps) => {
  const renderStars = () => {
    const stars = []
    const totalStars = 5

    for (let i = 0; i < totalStars; i++) {
      const isFullStar = rating > i + 0.5
      const isHalfStar = rating > i + 0.25

      if (isFullStar) {
        stars.push(
          <Star
            key={i}
            size={20}
            weight="fill"
          />
        )
      } else if (isHalfStar) {
        stars.push(
          <StarHalf
            key={i}
            size={20}
            weight="fill"
          />
        )
      } else {
        stars.push(
          <Star
            key={i}
            size={20}
            weight="regular"
          />
        )
      }
    }

    return stars
  }

  return <div className="flex text-primary-400">{renderStars()}</div>
}

export default Rating
