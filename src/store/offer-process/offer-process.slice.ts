import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, StatusLoading } from '../../const';
import { fetchNearOffersAction, fetchOfferByIdAction } from '../api-actions';
import { OfferProcess } from '../../types/offer-process';


const initialState: OfferProcess = {
  nearOffers: [],
  currentOffer: null,
  statusLoading: StatusLoading.None
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeFavoriteInOffer: (state, action: PayloadAction<{id: string; isFavorite: boolean}>) => {
      if(state.currentOffer?.id === action.payload.id) {
        state.currentOffer.isFavorite = action.payload.isFavorite;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.statusLoading = StatusLoading.Loading;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.statusLoading = StatusLoading.Success;
        state.currentOffer = action.payload;
      })
      .addCase(fetchOfferByIdAction.rejected, (state) => {
        state.statusLoading = StatusLoading.Failed;
      })
      .addCase(fetchNearOffersAction.pending, (state) => {
        state.statusLoading = StatusLoading.Loading;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.statusLoading = StatusLoading.Success;
        state.nearOffers = action.payload;
      })
      .addCase(fetchNearOffersAction.rejected, (state) => {
        state.statusLoading = StatusLoading.Failed;
      });
  }
});

export const {changeFavoriteInOffer} = offerProcess.actions;
