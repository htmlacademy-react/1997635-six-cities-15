import { useState, ChangeEvent, Fragment } from 'react';
import { RatingValues } from '../../const';

function ReviewForm () {
  const [formValues, setFormValues] = useState<{rating: null | number; comment: string}>({rating: null, comment: ''});
  return (
    <form className="reviews__form form" action="#" method="post">
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
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
          setFormValues({
            ...formValues,
            comment: target.value
          });
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!(formValues.rating && formValues.comment.length >= 50)}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
