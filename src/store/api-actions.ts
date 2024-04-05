import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AuthorizationStatus } from '../const';
import { TFullOffer, TOffer } from '../types/offers';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { TReview, TReviewForm } from '../types/reviews';

export const fetchOfferListAction = createAsyncThunk<TOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers/all',
  async (_arg, {extra: api}) => {
    const response = await api.get<TOffer[]>(APIRoute.Offers);
    return response.data;
  }
);

export const fetchOfferByIdAction = createAsyncThunk<TFullOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers/id',
  async (id, {extra: api}) => {
    const response = await api.get<TFullOffer>(`${APIRoute.Offers}/${id}`);
    return response.data;
  }
);

export const fetchNearOffersAction = createAsyncThunk<TOffer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers/id/nearby',
  async (id, {extra: api}) => {
    const response = await api.get<TOffer[]>(`${APIRoute.Offers}/${id}/nearby`);
    return response.data;
  }
);

export const fetchReviewsListAction = createAsyncThunk<TReview[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchReviewsList',
  async (id, {extra: api}) => {
    const response = await api.get<TReview[]>(`${APIRoute.Comments}/${id}`);
    return response.data;
  }
);

export const postReviewAction = createAsyncThunk<TReview, {id: string; reviewValues: TReviewForm}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/postReview',
  async ({id, reviewValues}, {extra: api}) => {
    const response = await api.post<TReview>(`${APIRoute.Comments}/${id}`, reviewValues);
    return response.data;
  }
);

export const fetchFavoritesAction = createAsyncThunk<TOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchFavorites',
  async (_arg, {extra: api}) => {
    const response = await api.get<TOffer[]>(APIRoute.Favorite);
    return response.data;
  }
);

export const postFavoriteStatus = createAsyncThunk<TFullOffer, {id: string; isFavorite: boolean}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/postToggleFavorite',
  async ({id, isFavorite}, {extra: api}) => {
    const response = await api.post<TFullOffer>(`${APIRoute.Favorite}/${id}/${Number(isFavorite)}`);
    return response.data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get<AuthorizationStatus>(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({login: email, password}, {extra: api}) => {
    const {data: {token, email: userEmail}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token, userEmail);
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

