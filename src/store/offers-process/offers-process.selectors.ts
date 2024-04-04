import { NameSpace } from '../../const';
import { State } from '../../types/state';

const selectOffers = (state: State) => state[NameSpace.Offers].offers;

const selectCity = (state: State) => state[NameSpace.Offers].currentCity;

const selectStatusLoading = (state: State) => state[NameSpace.Offers].statusLoading;

export {selectCity, selectOffers, selectStatusLoading};
