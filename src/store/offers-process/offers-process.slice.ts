import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, Locations, NameSpace, StatusLoading } from '../../const';
import { OffersProcess } from '../../types/offers-process';
import { fetchOfferListAction } from '../api-actions';

const initialState: OffersProcess = {
  offers: [],
  currentCity: DEFAULT_CITY,
  statusLoading: StatusLoading.None
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<Locations>) => {
      state.currentCity = action.payload;
    },
    changeFavoriteInOffers: (state, action: PayloadAction<{id: string; isFavorite: boolean}>) => {
      const findIndex = state.offers.findIndex((offer) => offer.id === action.payload.id);
      state.offers[findIndex].isFavorite = action.payload.isFavorite;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferListAction.fulfilled, (state, action) => {
        state.statusLoading = StatusLoading.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOfferListAction.pending, (state) => {
        state.statusLoading = StatusLoading.Loading;
      })
      .addCase(fetchOfferListAction.rejected, (state) => {
        state.statusLoading = StatusLoading.Failed;
      });
  }
});

export const {changeCity, changeFavoriteInOffers} = offersProcess.actions;
