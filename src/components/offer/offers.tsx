import Offer from './offer';

type OffersScreenProps = {
  offersCount: number;
}

function Offers ({offersCount}: OffersScreenProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {Array.from({length: offersCount}, () => Math.random()).map((v) => <Offer key={v}/>)}
    </div>
  );
}

export default Offers;
