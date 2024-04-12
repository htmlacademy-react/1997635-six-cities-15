import OfferItem from './offer-item';
import type { TOffer } from '../../types/offers';

type OffersScreenProps = {
  offers: TOffer[];
  onOfferHover?: (offer?: TOffer) => void;
}

function Offers ({offers, onOfferHover}: OffersScreenProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferItem key={offer.id} offer={offer} isOfferItem onOfferHover={onOfferHover}/>)}
    </div>
  );
}

export default Offers;
