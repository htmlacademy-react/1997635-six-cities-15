import ReviewForm from './review-form';
import ReviewList from './review-list';
import { getAuthorizationStatus } from '../../mock/getAuthorizationStatus';
import { AuthorizationStatus } from '../../const';

function Review () {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ReviewList />
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
    </section>
  );
}

export default Review;
