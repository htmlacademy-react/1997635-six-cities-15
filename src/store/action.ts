import { createAction } from '@reduxjs/toolkit';
import { TFullOffer, TOffer } from '../types/offers';
import { Locations } from '../const';

export const changeCity = createAction<Locations>('changeCity');

export const getOfferList = createAction<TOffer[]>('data/getOfferList');

export const getOfferById = createAction<TFullOffer>('data/getOfferById');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');


