import { State } from '../../types/state';
import { NameSpace } from '../../const';

const selectReviewsList = (state: State) => state[NameSpace.Comments].reviewsList;

const selectStatusLoading = (state: State) => state[NameSpace.Comments].statusLoading;

export {selectReviewsList, selectStatusLoading};

