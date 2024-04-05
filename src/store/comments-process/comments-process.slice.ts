import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, StatusLoading } from '../../const';
import { fetchReviewsListAction, postReviewAction } from '../api-actions';
import { CommentsProcess } from '../../types/comments-process';


const initialState: CommentsProcess = {
  reviewsList: [],
  statusLoading: StatusLoading.None
};

export const commentsProcess = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsListAction.pending, (state) => {
        state.statusLoading = StatusLoading.Loading;
      })
      .addCase(fetchReviewsListAction.fulfilled, (state, action) => {
        state.statusLoading = StatusLoading.Success;
        state.reviewsList = action.payload;
      })
      .addCase(fetchReviewsListAction.rejected, (state) => {
        state.statusLoading = StatusLoading.Failed;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.statusLoading = StatusLoading.Success;
        state.reviewsList.push(action.payload);
      });
  }
});
