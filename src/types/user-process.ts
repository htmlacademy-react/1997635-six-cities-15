import { AuthorizationStatus } from '../const';
import { AuthUserData } from './user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData?: AuthUserData;
};
