import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersProcess } from './offers-process/offers-process.slice';
import { offerProcess } from './offer-process/offer-process.slice';
import { commentsProcess } from './comments-process/comments-process.slice';
import { favoritesProcess } from './favorites-process/favorites-process.slice';
import { userProcess } from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.Comments]: commentsProcess.reducer,
  [NameSpace.Favorite]: favoritesProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
