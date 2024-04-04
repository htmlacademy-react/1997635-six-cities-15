import { Locations, StatusLoading } from '../const';
import { TOffer } from './offers';

export type OffersProcess = {
  offers:TOffer[];
  currentCity: Locations;
  statusLoading: StatusLoading;
};
