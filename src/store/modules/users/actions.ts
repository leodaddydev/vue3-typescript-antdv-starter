import { ActionTree } from 'vuex';
import { RootState } from '@/stores';
import { State } from './state';
import { UserActionTypes } from './action-types';

export interface Actions {
  [UserActionTypes.USERS](): void;
  [UserActionTypes.USER_CREATE](): void;
  [UserActionTypes.USER_UPDATE](): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [UserActionTypes.USERS]() { },
  [UserActionTypes.USER_CREATE]() { },
  [UserActionTypes.USER_UPDATE]() { },
};
