import { Locations, NEAR_OFFERS_COUNT, PlacesOption } from './const';
import { TOffer } from './types/offers';
import { Nullable } from 'vitest';

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

const getCurrentOffersList = (offers: Nullable<TOffer[]>, currentCity: Locations) => offers?.filter((offer) => offer.city.name === currentCity);

export { getStrStartWithCapitalLetters, getNearOffers, getSortOffersList, getCurrentOffersList };
