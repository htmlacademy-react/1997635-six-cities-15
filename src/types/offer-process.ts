import { StatusLoading } from '../const';
import { TFullOffer, TOffer } from './offers';

export type OfferProcess = {
  nearOffers: TOffer[];
  currentOffer: TFullOffer | null;
  statusLoading: StatusLoading;
};
