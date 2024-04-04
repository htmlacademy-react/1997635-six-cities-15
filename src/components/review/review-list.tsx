import { useAppSelector } from '../../hooks';
import { selectReviewsList } from '../../store/comments-process/comments-process.selectors';
import ReviewItem from './review-item';

function ReviewList (): JSX.Element {
  const reviews = useAppSelector(selectReviewsList);

  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
        <ReviewItem review={review} key={review.id}/>)}
    </ul>
  );
}

export default ReviewList;
