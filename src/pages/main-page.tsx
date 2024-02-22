import Header from '../components/layout/header';
import Map from '../components/map/map';
import Offers from '../components/offer/offers';
import Sort from '../components/sort/sort';
import Tabs from '../components/tabs/tabs';

type MainPageScreenProps = {
  offersCount: number;
}

function MainPage({offersCount}: MainPageScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
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
              <Offers offersCount={offersCount}/>
            </section>
            <Map />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
