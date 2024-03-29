import { State } from '../../types/state';

const selectOffers = (state: State) => state.offers;

const selectCurrentOffer = (state: State) => state.currentOffer;

const selectCity = (state: State) => state.currentCity;

const selectIsDataLoading = (state: State) => state.isDataLoading;

const selectAuthorizationStatus = (state: State) => state.authorizationStatus;

const selectUserEmail = (state: State) => state.userEmail;

const selectNearOffers = (state: State) => state.nearOffers;

const selectReviewsList = (state: State) => state.reviewsList;

const selectFavorites = (state: State) => state.favorites;

export {
  selectCity,
  selectOffers,
  selectCurrentOffer,
  selectIsDataLoading,
  selectAuthorizationStatus,
  selectUserEmail,
  selectNearOffers,
  selectReviewsList,
  selectFavorites,
};
