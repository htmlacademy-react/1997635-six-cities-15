import { Helmet } from 'react-helmet-async';
import type { TOffer } from '../types/offers';
import { Locations } from '../const';
import FavoritesLocation from '../components/favorites-location/favorites-location';
import FavoriteEmpty from '../components/favorites-location/favorite-empty';
import { useAppSelector } from '../hooks';
import { selectFavorites } from '../store/favorites-process/favorites-process.selectors';


function FavoritesPage () : JSX.Element {

  const favorites = useAppSelector(selectFavorites);

  const isEmptyFavorites = favorites.length === 0;

  const getFavoritesSortList = () => {
    const favoritesSortList : Partial<Record<Locations, TOffer[]>> = {};
    favorites.forEach((favorite) => {
      if (favorite.city.name in favoritesSortList) {
        favoritesSortList[favorite.city.name]?.push(favorite);
      } else {
        favoritesSortList[favorite.city.name] = [favorite];
      }
    });
    return favoritesSortList;
  };

  return (
    <main className={`page__main page__main--favorites${isEmptyFavorites ? ' page__main--favorites-empty' : ''}`}>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className={`favorites${isEmptyFavorites ? ' favorites--empty' : ''}`}>
          {!isEmptyFavorites ?
            <>
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(getFavoritesSortList()).map((favoritesLocation) => <FavoritesLocation key={favoritesLocation[0]} favoritesLocation={favoritesLocation[0]} offers={favoritesLocation[1]}/>)}
              </ul>
            </> : <FavoriteEmpty/>}
        </section>
      </div>
    </main>
  );
}

export default FavoritesPage;
