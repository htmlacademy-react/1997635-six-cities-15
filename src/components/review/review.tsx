import ReviewForm from './review-form';
import ReviewList from './review-list';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectAuthorizationStatus, selectReviewsList } from '../../store/selectors/selectors';

function Review () : JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const reviews = useAppSelector(selectReviewsList);

  const reviewsCount = reviews.length;

  return (
    <section className="offer__reviews reviews">
      {reviewsCount !== 0 && (
        <>
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
          <ReviewList />
        </>
      )}
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
    </section>
  );
}

export default Review;
