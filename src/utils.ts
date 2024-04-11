import { AppRoute, Locations, MAX_IMAGES_COUNT, MAX_NEAR_OFFERS_COUNT, MAX_REVIEWS_COUNT, MIN_LENGTH_PASSWORD, PlacesOption } from './const';
import { TOffer } from './types/offers';
import { TReview } from './types/reviews';

const getStrStartWithCapitalLetters = (data: string) => data.replace(data[0], data[0].toUpperCase());

const getSortOffersList = (sort: PlacesOption, offers: TOffer[]) => {
  switch(sort) {
    case PlacesOption.PriceToHigh:
      return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
    case PlacesOption.PriceToLow:
      return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
    case PlacesOption.TopRated:
      return offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
    case PlacesOption.Popular:
    default:
      return offers;
  }
};

const getCurrentOffersList = (offers: TOffer[], currentCity: Locations) => offers?.filter((offer) => offer.city.name === currentCity);

const getLayoutState = (pathname: AppRoute, favorites: TOffer[]) => {
  let rootClassName = '';
  let linkClassName = '';
  let shouldRenderUser = true;
  let shouldRenderFooter = false;

  if (pathname === AppRoute.Main) {
    rootClassName = ' page--gray page--main';
    linkClassName = ' header__logo-link--active';
  } else if (pathname === AppRoute.Login) {
    rootClassName = ' page--gray page--login';
    shouldRenderUser = false;
  } else if (pathname === AppRoute.Favorites){
    shouldRenderFooter = true;
    if(favorites.length === 0) {
      rootClassName = ' page--favorites-empty';
    }
  }

  return {rootClassName, linkClassName, shouldRenderUser, shouldRenderFooter};
};

const getSortReviews = (reviews: TReview[]) => Array.from(reviews).sort((reviewA: TReview, reviewB: TReview) => {
  const dateA = Date.parse(reviewA.date);
  const dateB = Date.parse(reviewB.date);
  return dateB - dateA;
});

const getShownReviews = (reviews: TReview[]) => {
  const sortReviews = getSortReviews(reviews);
  const lastIndex = sortReviews.length;
  if (lastIndex < MAX_REVIEWS_COUNT){
    return sortReviews;
  }
  return sortReviews.slice(0, MAX_REVIEWS_COUNT);
};

const getImagesFromGallery = (images: string[]) => {
  if(images.length <= MAX_IMAGES_COUNT) {
    return images;
  }
  return images.slice(0, MAX_IMAGES_COUNT);
};

const getShownNearOffers = (nearOffers: TOffer[]) => {
  if(nearOffers.length <= MAX_NEAR_OFFERS_COUNT) {
    return nearOffers;
  }
  return nearOffers.slice(0, MAX_NEAR_OFFERS_COUNT);
};

const checkPassword = (password: string) => password.length >= MIN_LENGTH_PASSWORD && /\d/.test(password) && /[a-zа-яё]+/i.test(password);

const checkLogin = (login: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(login);

const getRandomCity = () =>{
  const locations = Object.values(Locations);
  let randomIndex = locations.length;
  while (randomIndex > locations.length - 1){
    randomIndex = Math.floor(Math.random() * 10);
  }
  return locations[randomIndex];
};

export { getStrStartWithCapitalLetters, getSortOffersList, getCurrentOffersList, getLayoutState, getShownReviews, getImagesFromGallery, getShownNearOffers, checkPassword, checkLogin, getRandomCity };
