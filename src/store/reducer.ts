import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOfferList, setDataLoadingStatus } from './action';
import { DEFAULT_CITY } from '../const';
import { Offers } from '../mock/offers';

const initialState = {
  currentCity: DEFAULT_CITY,
  offers: Offers,
  isDataLoading: false
};

const reducer = createReducer(initialState, (builder) =>{
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(getOfferList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });
});

export {reducer};
