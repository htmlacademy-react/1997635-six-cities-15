import { OfferInsideItems } from '../../const';
import OfferInsideItem from './offer-inside-item';

function OfferInside () {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {OfferInsideItems.map((item) => <OfferInsideItem key={item} item={item}/>)}
      </ul>
    </div>
  );
}

export default OfferInside;
