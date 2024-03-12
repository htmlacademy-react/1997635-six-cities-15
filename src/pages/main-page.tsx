import { useState } from 'react';
import { Nullable } from 'vitest';
import Map from '../components/map/map';
import Offers from '../components/offer/offers';
import Sort from '../components/sort/sort';
import Tabs from '../components/tabs/tabs';
import type { TOffer } from '../types/offers';
import { DEFAULT_CITY } from '../const';
import OfferEmpty from '../components/offer/offer-empty';

type MainPageScreenProps = {
  offersCount: number;
  offers: TOffer[];
}

function MainPage({offersCount, offers}: MainPageScreenProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable<TOffer>>(null);

  const handleOfferHover = (offer?: TOffer) => {
    setActiveOffer(offer || null);
  };

  const isEmptyOffers = offers.length === 0;

  return (
    <main className={`page__main page__main--index${isEmptyOffers ? ' page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        <div className={`cities__places-container container${isEmptyOffers ? ' cities__places-container--empty' : ''}`}>
          {!isEmptyOffers ?
            <>
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">312 places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width={7} height={4}>
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <Sort />
                </form>
                <Offers
                  offersCount={offersCount}
                  offers={offers}
                  handleOfferHover={handleOfferHover}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  city={DEFAULT_CITY}
                  offers={offers}
                  activeOffer={activeOffer}
                />
              </div>
            </>
            : <OfferEmpty />}
        </div>
      </div>
    </main>
  );
}

export default MainPage;
