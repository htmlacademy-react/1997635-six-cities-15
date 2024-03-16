import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOfferList } from './action';
import { DEFAULT_CITY } from '../const';
import { Offers } from '../mock/offers';

const initialState = {
  currentCity: DEFAULT_CITY,
  offers: Offers
};

const reducer = createReducer(initialState, (builder) =>{
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(getOfferList, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
