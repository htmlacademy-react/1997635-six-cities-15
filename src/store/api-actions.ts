import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { APIRoute } from '../const';
import { TFullOffer, TOffer } from '../types/offers';
import { getOfferList, setDataLoadingStatus, getOfferById } from './action';

export const fetchOfferListAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers/all',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<TOffer[]>(APIRoute.Offers);
    dispatch(setDataLoadingStatus(false));
    dispatch(getOfferList(data));
  }
);

export const fetchOfferByIdAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers/id',
  async (id, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<TFullOffer>(`${APIRoute.Offers}/${id}`);
    dispatch(setDataLoadingStatus(false));
    dispatch(getOfferById(data));
  }
);


