import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute, StatusLoading } from '../const';
import { getShownNearOffers, getStrStartWithCapitalLetters } from '../utils';
import Gallery from '../components/gallery/gallery';
import OfferInside from '../components/offer-inside/offer-inside';
import Review from '../components/review/review';
import OfferItem from '../components/offer/offer-item';
import Map from '../components/map/map';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchNearOffersAction, fetchOfferByIdAction, fetchReviewsListAction } from '../store/api-actions';
import { useEffect } from 'react';
import Loader from '../components/loader/loader';
import { selectCurrentOffer, selectNearOffers } from '../store/offer-process/offer-process.selectors';
import { selectStatusLoading } from '../store/offers-process/offers-process.selectors';
import MemorizedFavorite from '../components/ui/favorite';
import MemorizedPremium from '../components/ui/premium';
import MemorizedRating from '../components/ui/rating';

function OfferPage () {
  const nearOffers = useAppSelector(selectNearOffers);
  const statusLoading = useAppSelector(selectStatusLoading);
  const currentOffer = useAppSelector(selectCurrentOffer);
  const {id: currentId} = useParams();

  const dispatch = useAppDispatch();

  useEffect(()=> {
    if (!currentOffer && currentId){
      dispatch(fetchOfferByIdAction(currentId));
      dispatch(fetchNearOffersAction(currentId));
      dispatch(fetchReviewsListAction(currentId));
    } else if (currentId && currentOffer && currentId !== currentOffer?.id){
      dispatch(fetchOfferByIdAction(currentId));
      dispatch(fetchNearOffersAction(currentId));
      dispatch(fetchReviewsListAction(currentId));
    }
  }, [dispatch, currentId, currentOffer]);


  if (!currentOffer) {
    return <Navigate to={AppRoute.Main}/>;
  }


  if(statusLoading === StatusLoading.Loading) {
    return (
      <Loader />
    );
  }
  const {title, type, price, isFavorite, isPremium, rating, images, bedrooms, maxAdults, host, description} = currentOffer;

  const shownNearOffers = getShownNearOffers(nearOffers);

  const nearOffersPlusCurrent = [...shownNearOffers, currentOffer];

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <section className="offer">
        <Gallery images={images}/>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium && <MemorizedPremium isOfferCard={false}/>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <MemorizedFavorite isOfferCard={false} isFavorite={isFavorite} id={currentId}/>
            </div>
            <div className="offer__rating rating">
              <MemorizedRating isOffer rating={rating}/>
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
            <Review id={currentId}/>
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
