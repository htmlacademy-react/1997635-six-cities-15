import { TOffer } from './types/offers';

const getStrStartWithCapitalLetters = (data: string) => data.replace(data[0], data[0].toUpperCase());

const getNearOffers = (offers: TOffer[], currentOffer: TOffer): TOffer[] => {
  let lastInd = 0;
  const nearOffers = new Set<TOffer>();
  while (nearOffers.size < 3) {
    if(offers[lastInd].id !== currentOffer.id){
      nearOffers.add(offers[lastInd]);
    }
    lastInd ++;
  }
  return [...nearOffers];
};

export { getStrStartWithCapitalLetters, getNearOffers };
