import Offer from './offer';

function Offers () {
  return (
    <div className="cities__places-list places__list tabs__content">
      {Array.from({length: 5}, () => Math.random()).map((v) => <Offer key={v}/>)}
    </div>
  );
}

export default Offers;
