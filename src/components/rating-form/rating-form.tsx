import { ChangeEvent } from 'react';
import RatingItem from './rating-item';
import { RatingValues } from '../../const';

type RatingFormProps = {
  isLoading: boolean;
  rating: number | null;
  handleRatingChange: ({target}: ChangeEvent<HTMLInputElement>) => void;
}

function RatingForm ({isLoading, rating, handleRatingChange } : RatingFormProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {RatingValues.map((value) => (
        <RatingItem
          key={value}
          value={value}
          isLoading={isLoading}
          rating={rating}
          handleRatingChange={handleRatingChange}
        />))}
    </div>
  );
}

export default RatingForm;
