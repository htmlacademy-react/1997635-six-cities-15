import ReviewForm from './review-form';
import ReviewList from './review-list';

function Review () {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ReviewList />
      <ReviewForm />
    </section>
  );
}

export default Review;
