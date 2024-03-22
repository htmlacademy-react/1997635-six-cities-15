import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOfferById, getOfferList, setDataLoadingStatus } from './action';
import { DEFAULT_CITY } from '../const';
import { TOffer, TFullOffer } from '../types/offers';

const initialState = {
  currentCity: DEFAULT_CITY,
  offers: <TOffer[]>[],
  isDataLoading: false,
  currentOffer: <null | TFullOffer>null
};

const reducer = createReducer(initialState, (builder) =>{
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(getOfferList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getOfferById, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });
});

export {reducer};
