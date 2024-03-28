import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AuthorizationStatus } from '../const';
import { TFullOffer, TOffer } from '../types/offers';
import { getOfferList, setDataLoadingStatus, getOfferById, setAuthorizationStatus, setUserEmail, getNearOffers, getReviewsList, getFavorites } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { TReview } from '../types/reviews';

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

export const fetchNearOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers/id/nearby',
  async (id, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<TOffer[]>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(setDataLoadingStatus(false));
    dispatch(getNearOffers(data));
  }
);

export const fetchReviewsListAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchReviewsList',
  async (id, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<TReview[]>(`${APIRoute.Comments}/${id}`);
    dispatch(setDataLoadingStatus(false));
    dispatch(getReviewsList(data));
  }
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<TOffer[]>(APIRoute.Favorite);
    dispatch(setDataLoadingStatus(false));
    dispatch(getFavorites(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get<AuthorizationStatus>(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token, email: userEmail}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setUserEmail(userEmail));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(setUserEmail(null));
  },
);

