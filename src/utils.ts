import { AppRoute, Locations, NEAR_OFFERS_COUNT, PlacesOption } from './const';
import { TOffer } from './types/offers';

const getStrStartWithCapitalLetters = (data: string) => data.replace(data[0], data[0].toUpperCase());

const getNearOffers = (offers: TOffer[] | null, currentOffer: TOffer): TOffer[] => {
  let lastInd = 0;
  const nearOffers = new Set<TOffer>();

  if(offers === null){
    return [];
  }
  while (nearOffers.size < NEAR_OFFERS_COUNT) {
    if(offers[lastInd].id !== currentOffer.id){
      nearOffers.add(offers[lastInd]);
    }
    lastInd ++;
  }
  return [...nearOffers];
};

const getSortOffersList = (sort: PlacesOption, offers: TOffer[]) => {
  switch(sort) {
    case PlacesOption.Price_to_high:
      return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
    case PlacesOption.Price_to_low:
      return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
    case PlacesOption.Top_rated:
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

export { getStrStartWithCapitalLetters, getNearOffers, getSortOffersList, getCurrentOffersList, getLayoutState };
