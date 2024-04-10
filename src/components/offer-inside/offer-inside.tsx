
import OfferInsideItem from './offer-inside-item';

type OfferInsideProps = {
  goods: [string];
}

function OfferInside ({goods}: OfferInsideProps) {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((item) => <OfferInsideItem key={item} item={item}/>)}
      </ul>
    </div>
  );
}

export default OfferInside;
