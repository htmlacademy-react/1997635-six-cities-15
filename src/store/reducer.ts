import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOfferById, getOfferList, setDataLoadingStatus, setAuthorizationStatus, setUserEmail, getNearOffers, getReviewsList, getFavorites } from './action';
import { AuthorizationStatus, DEFAULT_CITY, Locations } from '../const';
import { TOffer, TFullOffer } from '../types/offers';
import { TReview } from '../types/reviews';

type TInitialState ={
  currentCity: Locations;
  offers: TOffer[];
  isDataLoading: boolean;
  currentOffer: TFullOffer | null;
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
  nearOffers: TOffer[];
  reviewsList: TReview[];
  favorites: TOffer[];
}

const initialState: TInitialState = {
  currentCity: DEFAULT_CITY,
  offers: [],
  isDataLoading: false,
  currentOffer: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null,
  nearOffers: [],
  reviewsList: [],
  favorites: []
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
    })
    .addCase(getNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(getReviewsList, (state, action) => {
      state.reviewsList = action.payload;
    })
    .addCase(getFavorites, (state, action) => {
      state.favorites = action.payload;
    });
});

export {reducer};
