import OfferItem from './offer-item';
import type { TOffer } from '../../types/offers';

type OffersScreenProps = {
  offersCount: number;
  offers: TOffer[];
  handleOfferHover?: (offer?: TOffer) => void;
}

function Offers ({offersCount, offers, handleOfferHover}: OffersScreenProps): JSX.Element {

  const getOffersList = () => {
    if (offersCount >= offers.length) {
      return offers;
    }
    return offers.slice(0, offersCount);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {getOffersList().map((offer) => <OfferItem key={offer.id} offer={offer} isOfferItem handleOfferHover={handleOfferHover}/>)}
    </div>
  );
}

export default Offers;
