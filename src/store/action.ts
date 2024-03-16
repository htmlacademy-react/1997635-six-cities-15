import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offers';
import { Locations } from '../const';

export const changeCity = createAction<Locations>('changeCity');

export const getOfferList = createAction<TOffer[] | []>('getOfferList');

