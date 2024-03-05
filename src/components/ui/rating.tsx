type RatingProps = {
  isOfferCard?: boolean;
  rating: number;
  isOffer?: boolean;
}

function Rating ({isOfferCard, isOffer, rating} : RatingProps) : JSX.Element {
  let ratingClass = '';
  if (isOfferCard) {
    ratingClass = 'place-card';
  } else if (isOffer) {
    ratingClass = 'offer';
  } else {
    ratingClass = 'reviews';
  }

  const ratingWidth = String(Math.round(rating) * 20);

  return (
    <div className={`${ratingClass}__rating rating`}>
      <div className={`${ratingClass}__stars rating__stars`}>
        <span style={{width: `${ratingWidth}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default Rating;
