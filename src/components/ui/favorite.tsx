import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postFavoriteStatus } from '../../store/api-actions';
import { changeFavoriteInNearOffers, changeFavoriteInOffer } from '../../store/offer-process/offer-process.slice';
import { changeFavoriteInOffers } from '../../store/offers-process/offers-process.slice';
import { selectAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { AppRoute, AuthorizationStatus, ErrorMessages, StatusLoading } from '../../const';
import { toast } from 'react-toastify';
import { selectStatusLoading } from '../../store/favorites-process/favorites-process.selectors';

type FavoriteProps = {
  isOfferCard: boolean;
  isFavorite: boolean;
  id: string | undefined;
}

export function Favorite({ isOfferCard, isFavorite, id }: FavoriteProps): JSX.Element {
  const favoriteClass = isOfferCard ? 'place-card' : 'offer';
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const statusLoading = useAppSelector(selectStatusLoading);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      if (authorizationStatus === AuthorizationStatus.Auth) {
        const setting = { id, isFavorite: !isFavorite };
        dispatch(postFavoriteStatus(setting));
        dispatch(changeFavoriteInOffers(setting));
        dispatch(changeFavoriteInOffer(setting));
        dispatch(changeFavoriteInNearOffers(setting));
      } else {
        navigate(AppRoute.Login);
      }
    }
  };

  useEffect(() => {
    if (statusLoading === StatusLoading.Failed) {
      toast.warn(ErrorMessages.Post, {
        position: 'bottom-right'
      });
    }
  }, [statusLoading]);

  return (
    <button
      className={`${favoriteClass}__bookmark-button button ${isFavorite && (authorizationStatus === AuthorizationStatus.Auth) ? ` ${favoriteClass}__bookmark-button--active` : ''}`} type="button"
      onClick={handleClick}
    >
      <svg className={`${favoriteClass}__bookmark-icon`} width={isOfferCard ? 18 : 31} height={isOfferCard ? 19 : 33}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

const MemorizedFavorite = memo(Favorite);

export default MemorizedFavorite;
