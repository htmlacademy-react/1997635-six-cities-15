import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, StatusLoading } from '../../const';
import { fetchFavoritesAction, postFavoriteStatus } from '../api-actions';
import { FavoritesProcess } from '../../types/favorites-process';

const initialState: FavoritesProcess = {
  favorites: [],
  statusLoading: StatusLoading.None
};

export const favoritesProcess = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.statusLoading = StatusLoading.Loading;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.statusLoading = StatusLoading.Success;
        state.favorites = action.payload;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.statusLoading = StatusLoading.Failed;
      })
      .addCase(postFavoriteStatus.fulfilled, (state, action) => {
        state.statusLoading = StatusLoading.Success;
        const favoriteData = action.payload;
        if(favoriteData.isFavorite){
          state.favorites.push(favoriteData);
        } else {
          const deleteIndex = state.favorites.findIndex((favorite) => favorite.id === favoriteData.id);
          state.favorites.splice(deleteIndex, 1);
        }
      });
  }
});
