import { MutationTree } from 'vuex';
import { User } from '@/@types';
import { State } from './state';

import { UserMutationTypes } from './mutation-types';

export type Mutations<S = State> = {
  [UserMutationTypes.SET_USERS](state: S, payload: User[]): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [UserMutationTypes.SET_USERS](state: State, users: User[]) {
    state.users = users;
  },
};
