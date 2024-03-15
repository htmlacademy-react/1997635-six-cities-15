import { State } from '../../types/state';

const selectOffers = (state: State) => state.offers;

const selectCity = (state: State) => state.currentCity;

export { selectCity, selectOffers };
