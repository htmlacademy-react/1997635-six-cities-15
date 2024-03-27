import ReviewForm from './review-form';
import ReviewList from './review-list';
import { AuthorizationStatus } from '../../const';
import type { TReview } from '../../types/reviews';
import { useAppSelector } from '../../hooks';
import { selectAuthorizationStatus } from '../../store/selectors/selectors';

type ReviewProps = {
  reviews: TReview[];
}

function Review ({reviews} : ReviewProps) : JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  const reviewsCount = reviews.length;

  return (
    <section className="offer__reviews reviews">
      {reviewsCount !== 0 && (
        <>
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
          <ReviewList reviews={reviews}/>
        </>
      )}
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
    </section>
  );
}

export default Review;
