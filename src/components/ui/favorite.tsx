import { useAppDispatch } from '../../hooks';
import { postFavoriteStatus } from '../../store/api-actions';
import { changeFavoriteInOffer } from '../../store/offer-process/offer-process.slice';
import { changeFavoriteInOffers } from '../../store/offers-process/offers-process.slice';

type FavoriteProps = {
  isOfferCard: boolean;
  isFavorite: boolean;
  id: string | undefined;
}

function Favorite ({isOfferCard, isFavorite, id} : FavoriteProps) : JSX.Element {
  const favoriteClass = isOfferCard ? 'place-card' : 'offer';

  const dispatch = useAppDispatch();

  const handleClick = () => {
    if(id) {
      const setting = {id, isFavorite: !isFavorite};
      dispatch(postFavoriteStatus(setting));
      dispatch(changeFavoriteInOffers(setting));
      dispatch(changeFavoriteInOffer(setting));
    }
  };

  return (
    <button
      className={`${favoriteClass}__bookmark-button button ${isFavorite ? ` ${favoriteClass}__bookmark-button--active` : ''}`} type="button"
      onClick={handleClick}
    >
      <svg className={`${favoriteClass}__bookmark-icon`} width={isOfferCard ? 18 : 31} height={isOfferCard ? 19 : 33}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default Favorite;
