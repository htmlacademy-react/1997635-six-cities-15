import { NameSpace } from '../../const';
import { State } from '../../types/state';

const selectCurrentOffer = (state: State) => state[NameSpace.Offer].currentOffer;

const selectNearOffers = (state: State) => state[NameSpace.Offer].nearOffers;

const selectStatusLoading = (state: State) => state[NameSpace.Offer].statusLoading;

export {selectCurrentOffer, selectNearOffers, selectStatusLoading};
