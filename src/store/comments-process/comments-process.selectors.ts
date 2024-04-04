import { State } from '../../types/state';
import { NameSpace } from '../../const';

const selectReviewsList = (state: State) => state[NameSpace.Comments].reviewsList;

export {selectReviewsList};

