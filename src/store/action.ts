import { createAction } from '@reduxjs/toolkit';
import { TFullOffer, TOffer } from '../types/offers';
import { AuthorizationStatus, Locations } from '../const';

export const changeCity = createAction<Locations>('changeCity');

export const getOfferList = createAction<TOffer[]>('data/getOfferList');

export const getOfferById = createAction<TFullOffer>('data/getOfferById');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const setUserEmail = createAction<string | null>('user/setUserEmail');
