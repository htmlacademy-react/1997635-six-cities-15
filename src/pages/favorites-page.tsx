import { Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TOffer } from '../types/offers';
import { AppRoute, Locations } from '../const';
import FavoritesLocation from '../components/favorites-location/favorites-location';

type FavoritesPageProps = {
  favorites: TOffer[];
}

function FavoritesPage ({favorites} : FavoritesPageProps) : JSX.Element {

  if (favorites.length === 0){
    <Navigate to={AppRoute.Main}></Navigate>;
  }

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
    <main className="page__main page__main--favorites">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(getFavoritesSortList()).map((favoritesLocation) => <FavoritesLocation key={favoritesLocation[0]} favoritesLocation={favoritesLocation[0]} offers={favoritesLocation[1]}/>)}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesPage;
