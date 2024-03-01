import ReviewForm from './review-form';
import ReviewList from './review-list';
import { getAuthorizationStatus } from '../../mock/getAuthorizationStatus';
import { AuthorizationStatus } from '../../const';
import { TReview } from '../../types/reviews';

type ReviewProps = {
  reviews: TReview[];
}

function Review ({reviews} : ReviewProps) : JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

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
