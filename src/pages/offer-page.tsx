import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../const';
import type { TReview } from '../types/reviews';
import { getStrStartWithCapitalLetters, getNearOffers } from '../utils';
import Gallery from '../components/gallery/gallery';
import OfferInside from '../components/offer-inside/offer-inside';
import Review from '../components/review/review';
import Premium from '../components/ui/premium';
import Favorite from '../components/ui/favorite';
import Rating from '../components/ui/rating';
import OfferItem from '../components/offer/offer-item';
import Map from '../components/map/map';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectCurrentOffer, selectIsDataLoading, selectOffers } from '../store/selectors/offers';
import { fetchOfferByIdAction } from '../store/api-actions';
import { useEffect } from 'react';
import Loader from '../components/loader/loader';

type OfferPageScreenProps = {
  reviews: TReview[];
}

function OfferPage ({reviews} : OfferPageScreenProps) {
  const offers = useAppSelector(selectOffers);
  const isDataLoading = useAppSelector(selectIsDataLoading);
  const currentOffer = useAppSelector(selectCurrentOffer);
  const {id: currentId} = useParams();

  const dispatch = useAppDispatch();

  useEffect(()=> {
    if (!currentOffer && currentId){
      dispatch(fetchOfferByIdAction(currentId));
    } else if (currentId && currentOffer && currentId !== currentOffer.id){
      dispatch(fetchOfferByIdAction(currentId));
    }
  }, [dispatch, currentId, currentOffer]);


  if (!currentOffer) {
    return <Navigate to={AppRoute.Main}/>;
  }


  if(isDataLoading) {
    return (
      <Loader />
    );
  }
  const {title, type, price, isFavorite, isPremium, rating, images, bedrooms, maxAdults, host, description} = currentOffer;

  const nearOffers = getNearOffers(offers, currentOffer);

  const nearOffersPlusCurrent = [...nearOffers, currentOffer];

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <section className="offer">
        <Gallery images={images}/>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium && <Premium isOfferCard={false}/>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <Favorite isOfferCard={false} isFavorite={isFavorite}/>
            </div>
            <div className="offer__rating rating">
              <Rating isOffer rating={rating}/>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {getStrStartWithCapitalLetters(type)}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <OfferInside/>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt="Host avatar" />
                </div>
                <span className="offer__user-name">
                  Angelina
                </span>
                {host.isPro && <span className="offer__user-status">Pro</span>}
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {description}
                </p>
              </div>
            </div>
            <Review reviews={reviews}/>
          </div>
        </div>
        <Map
          offers={nearOffersPlusCurrent}
          activeOffer={currentOffer}
          isOfferPage
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {nearOffers.map((offer) => <OfferItem key={offer.id} offer={offer}/>)}
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferPage;
