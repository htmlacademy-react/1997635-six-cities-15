import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOfferById, getOfferList, setDataLoadingStatus, setAuthorizationStatus, setUserEmail } from './action';
import { AuthorizationStatus, DEFAULT_CITY, Locations } from '../const';
import { TOffer, TFullOffer } from '../types/offers';

type TInitialState ={
  currentCity: Locations;
  offers: TOffer[];
  isDataLoading: boolean;
  currentOffer: TFullOffer | null;
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
}

const initialState: TInitialState = {
  currentCity: DEFAULT_CITY,
  offers: [],
  isDataLoading: false,
  currentOffer: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null,
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
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});

export {reducer};
