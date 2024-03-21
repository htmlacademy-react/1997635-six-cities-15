import OfferItem from './offer-item';
import type { TOffer } from '../../types/offers';

type OffersScreenProps = {
  offers: TOffer[];
  handleOfferHover?: (offer?: TOffer) => void;
}

function Offers ({offers, handleOfferHover}: OffersScreenProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferItem key={offer.id} offer={offer} isOfferItem handleOfferHover={handleOfferHover}/>)}
    </div>
  );
}

export default Offers;
