import { TReview } from '../../types/reviews';
import ReviewItem from './review-item';

type ReviewListProps = {
  reviews: TReview[];
}

function ReviewList ({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
        <ReviewItem review={review} key={review.id}/>)}
    </ul>
  );
}

export default ReviewList;
