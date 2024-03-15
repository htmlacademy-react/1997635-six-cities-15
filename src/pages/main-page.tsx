import { useState } from 'react';
import { Nullable } from 'vitest';
import Map from '../components/map/map';
import Offers from '../components/offer/offers';
import Sort from '../components/sort/sort';
import Tabs from '../components/tabs/tabs';
import type { TOffer } from '../types/offers';
import OfferEmpty from '../components/offer/offer-empty';
import { useAppSelector } from '../hooks';
import { selectCity, selectOffers } from '../store/selectors/offers';

type MainPageScreenProps = {
  offersCount: number;
}

function MainPage({offersCount}: MainPageScreenProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable<TOffer>>(null);
  const offers = useAppSelector(selectOffers);
  const currentCity = useAppSelector(selectCity);

  const currentOffers = offers.filter((offer) => offer.city.name === currentCity);

  const handleOfferHover = (offer?: TOffer) => {
    setActiveOffer(offer || null);
  };

  const isEmptyOffers = currentOffers.length === 0;

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
                <b className="places__found">{currentOffers.length} place{currentOffers.length !== 1 ? 's ' : ''} to stay in {currentCity}</b>
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
                  offers={currentOffers}
                  offersCount={offersCount}
                  handleOfferHover={handleOfferHover}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  offers={currentOffers}
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
