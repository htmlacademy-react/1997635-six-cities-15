import { ChangeEvent, Fragment } from 'react';

type RatingItemProps = {
  value: number;
  isLoading: boolean;
  rating: number | null;
  handleRatingChange: ({target}: ChangeEvent<HTMLInputElement>) => void;
}

function RatingItem ({value, isLoading, rating, handleRatingChange } : RatingItemProps) {
  return (
    <Fragment key={value}>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        onChange={(event) => handleRatingChange(event)}
        checked={Number(rating) === value}
        disabled={isLoading}
      />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

export default RatingItem;
