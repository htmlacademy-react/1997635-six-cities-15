import type { TReview } from '../../types/reviews';
import Rating from '../ui/rating';

type ReviewItemProps = {
  review: TReview;
}

function ReviewItem ({review}: ReviewItemProps): JSX.Element {
  const {user, date, comment, rating} = review;
  const formatDate = new Date(date).toLocaleString('en-US', { month: 'long', year: 'numeric'});
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={rating}/>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{formatDate}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
