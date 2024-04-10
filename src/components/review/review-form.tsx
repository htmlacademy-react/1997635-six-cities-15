import { useState, ChangeEvent, FormEvent, useCallback, useEffect } from 'react';
import { MAX_LENGTH_COMMENT, MIN_LENGTH_COMMENT, StatusLoading } from '../../const';
import { TReviewForm } from '../../types/reviews';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';
import { selectStatusLoading } from '../../store/comments-process/comments-process.selectors';
import RatingForm from '../rating-form/rating-form';

type ReviewFormProps = {
  id: string | undefined;
}

function ReviewForm ({id}: ReviewFormProps) {
  const [formValues, setFormValues] = useState<TReviewForm>({rating: null, comment: ''});

  const statusLoading = useAppSelector(selectStatusLoading);

  const isLoading = statusLoading === StatusLoading.Loading;

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(id) {
      dispatch(postReviewAction({id, reviewValues: formValues}));
    }
  };

  useEffect(() => {
    if(statusLoading === StatusLoading.Success) {
      setFormValues({rating: null, comment: ''});
    }
  }, [statusLoading]);

  const handleRatingChange = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      rating: Number(target.value)
    });
  }, [formValues]);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingForm
        isLoading={isLoading}
        rating={formValues.rating}
        handleRatingChange={handleRatingChange}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formValues.comment}
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
          setFormValues({
            ...formValues,
            comment: target.value
          });
        }}
        maxLength={MAX_LENGTH_COMMENT}
        disabled={isLoading}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isLoading || !(formValues.rating && formValues.comment.length >= MIN_LENGTH_COMMENT)}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
