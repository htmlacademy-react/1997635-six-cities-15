import { NameSpace } from '../../const';
import { State } from '../../types/state';

const selectFavorites = (state: State) => state[NameSpace.Favorite].favorites;

export {selectFavorites};
