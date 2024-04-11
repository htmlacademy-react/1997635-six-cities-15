import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchFavoritesAction, logoutAction } from '../../../store/api-actions';
import { MouseEvent, useEffect } from 'react';
import { getUserEmail } from '../../../services/token';
import { selectAuthorizationStatus, selectUserEmail } from '../../../store/user-process/user-process.selectors';
import { selectFavorites } from '../../../store/favorites-process/favorites-process.selectors';

function Navigation () : JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if(isAuth){
      dispatch(fetchFavoritesAction());
    }
  }, [isAuth, dispatch]);

  let userEmail = useAppSelector(selectUserEmail);

  if (!userEmail) {
    userEmail = getUserEmail();
  }

  const favorites = useAppSelector(selectFavorites);

  const favoritesCount = favorites.length;


  const handleClick = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className={`header__nav-item${isAuth ? ' user' : ''}`}>
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            {isAuth ? (
              <>
                <span className="header__user-name user__name">{userEmail}</span>
                <span className="header__favorite-count">{favoritesCount}</span>
              </>
            ) : <span className="header__login">Sign in</span>}

          </Link>
        </li>
        {isAuth && (
          <li className="header__nav-item" onClick={handleClick}>
            <a className="header__nav-link" href="#">
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
