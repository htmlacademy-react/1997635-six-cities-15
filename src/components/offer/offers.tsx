//import { useState } from 'react';
import OfferItem from './offer';
import { TOffer } from '../../types/offers';

type OffersScreenProps = {
  offersCount: number;
  offers: TOffer[];
}

function Offers ({offersCount, offers}: OffersScreenProps): JSX.Element {

  /*const [activeOffer, setActiveOffer] = useState(null<Nullable<TOffer>>);

  const handleOfferClick = (evt: FormEvent<HTMLFormElement>, offer: TOffer) => {
    evt.preventDefault();
    Перейти на страницу предложения
  };
  const handleOfferHover = (evt: FormEvent<HTMLFormElement>, offer: TOffer) => {
    evt.preventDefault();
    setActiveOffer(offer);
  };
  */

  const getOffersList = () => {
    if (offersCount >= offers.length) {
      return offers;
    }
    return offers.slice(0, offersCount);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {getOffersList().map((offer) => <OfferItem key={offer.id} offer={offer}/>)}
    </div>
  );
}

export default Offers;
