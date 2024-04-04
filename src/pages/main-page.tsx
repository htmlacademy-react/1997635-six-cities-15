import { useEffect, useState } from 'react';
import { Nullable } from 'vitest';
import Map from '../components/map/map';
import Offers from '../components/offer/offers';
import Sort from '../components/sort/sort';
import Tabs from '../components/tabs/tabs';
import type { TOffer } from '../types/offers';
import OfferEmpty from '../components/offer/offer-empty';
import { useAppSelector } from '../hooks';
import { PlacesOption } from '../const';
import { getCurrentOffersList, getSortOffersList } from '../utils';
import { selectCity, selectOffers } from '../store/offers-process/offers-process.selectors';

function MainPage(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable<TOffer>>(null);
  const [sortType, setSortType] = useState<PlacesOption>(PlacesOption.Popular);
  const [showSort, setShowSort] = useState<boolean>(false);

  const offers = useAppSelector(selectOffers);
  const currentCity = useAppSelector(selectCity);

  const [currentOffers, setCurrentOffers] = useState<TOffer[]>(getCurrentOffersList(offers, currentCity));
  const [sortOffers, setSortOffers] = useState<TOffer[]>(currentOffers);

  useEffect(() => {
    if (currentCity) {
      setCurrentOffers(getCurrentOffersList(offers, currentCity));
    }
  }, [offers, currentCity]);

  useEffect(() => {
    setSortOffers(getSortOffersList(sortType, currentOffers));
  }, [offers, sortType, currentOffers]);

  const handleOfferHover = (offer?: TOffer) => {
    setActiveOffer(offer || null);
  };

  const handleSortActive = (activeSortType: PlacesOption) => {
    if(activeSortType !== sortType) {
      setSortType(activeSortType);
    }
    setShowSort(!showSort);
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
                  <span className="places__sorting-caption">Sort by </span>
                  <span
                    className="places__sorting-type"
                    tabIndex={0}
                    onClick={() => setShowSort(!showSort)}
                  >
                    {sortType}
                    <svg className="places__sorting-arrow" width={7} height={4}>
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  {showSort && <Sort handleSortActive={handleSortActive} currentSortType={sortType}/>}
                </form>
                <Offers
                  offers={sortOffers}
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
