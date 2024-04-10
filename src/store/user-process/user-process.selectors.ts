import { NameSpace } from '../../const';
import { State } from '../../types/state';

const selectAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;

const selectUserEmail = (state: State) => state[NameSpace.User].userData?.email;

export {selectAuthorizationStatus, selectUserEmail};
