import { useAppDispatch } from '../../hooks';
import { fetchToggleFavorite } from '../../store/api-actions';

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
      dispatch(fetchToggleFavorite({id, isFavorite: !isFavorite}));
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
