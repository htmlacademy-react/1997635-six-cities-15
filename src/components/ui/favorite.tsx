type FavoriteProps = {
  isOfferCard: boolean;
  isFavorite: boolean;
}

function Favorite ({isOfferCard, isFavorite} : FavoriteProps) : JSX.Element {
  const favoriteClass = isOfferCard ? 'place-card' : 'offer';

  return (
    <button className={`${favoriteClass}__bookmark-button button ${isFavorite ? ` ${favoriteClass}__bookmark-button--active` : ''}`} type="button">
      <svg className={`${favoriteClass}__bookmark-icon`} width={isOfferCard ? 18 : 31} height={isOfferCard ? 19 : 33}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default Favorite;
