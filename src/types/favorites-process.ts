import { StatusLoading } from '../const';
import { TOffer } from './offers';

export type FavoritesProcess = {
  favorites: TOffer[];
  statusLoading: StatusLoading;
};
