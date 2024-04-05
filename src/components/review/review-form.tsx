import { useState, ChangeEvent, Fragment, FormEvent } from 'react';
import { MAX_LENGTH_COMMENT, MIN_LENGTH_COMMENT, RatingValues } from '../../const';
import { TReviewForm } from '../../types/reviews';
import { useAppDispatch } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';

type ReviewFormProps = {
  id: string | undefined;
}

function ReviewForm ({id}: ReviewFormProps) {
  const [formValues, setFormValues] = useState<TReviewForm>({rating: null, comment: ''});

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(id) {
      dispatch(postReviewAction({id, reviewValues: formValues})).then(()=> setFormValues({rating: null, comment: ''}));
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingValues.map((value) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                setFormValues({
                  ...formValues,
                  rating: Number(target.value)
                });
              }}
              checked={Number(formValues.rating) === value}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>))}
      </div>
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
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!(formValues.rating && formValues.comment.length >= MIN_LENGTH_COMMENT)}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
