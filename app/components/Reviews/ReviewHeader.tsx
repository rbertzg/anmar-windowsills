import Rating from './Rating'

interface ReviewHeaderProps {
  reviewer: string
  rating: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
}
const ReviewHeader = ({ reviewer, rating }: ReviewHeaderProps) => {
  return (
    <header>
      <span className="font-medium">{reviewer}</span>
      <div className="mt-3">
        <Rating rating={rating} />
      </div>
    </header>
  )
}

export default ReviewHeader
