import { memo } from 'react';

type PremiumProps = {
  isOfferCard: boolean;
}

function Premium ({isOfferCard} : PremiumProps) : JSX.Element {
  return (
    <div className={`${isOfferCard ? 'place-card' : 'offer'}__mark`}>
      <span>Premium</span>
    </div>
  );
}

const MemorizedPremium = memo(Premium);

export default MemorizedPremium;
