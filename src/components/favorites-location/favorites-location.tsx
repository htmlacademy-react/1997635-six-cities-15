import { TOffer } from '../../types/offers';
import OfferItem from '../offer/offer';

type FavoritesLocationProps = {
  favoritesLocation: string;
  offers: TOffer[];
}

function FavoritesLocation ({favoritesLocation, offers}: FavoritesLocationProps) : JSX.Element {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{favoritesLocation}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <OfferItem offer={offer} isFavorites key={offer.id}/>)}
      </div>
    </li>
  );
}

export default FavoritesLocation;
