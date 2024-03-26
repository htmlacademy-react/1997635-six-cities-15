import { State } from '../../types/state';

const selectOffers = (state: State) => state.offers;

const selectCurrentOffer = (state: State) => state.currentOffer;

const selectCity = (state: State) => state.currentCity;

const selectIsDataLoading = (state: State) => state.isDataLoading;

const selectAuthorizationStatus = (state: State) => state.authorizationStatus;

const selectUserEmail = (state: State) => state.userEmail;

export {
  selectCity,
  selectOffers,
  selectCurrentOffer,
  selectIsDataLoading,
  selectAuthorizationStatus,
  selectUserEmail
};
