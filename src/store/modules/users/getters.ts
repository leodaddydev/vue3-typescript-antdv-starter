import { GetterTree } from 'vuex';
import type { User } from '@/@types';
import { RootState } from '@/stores';
import { State } from './state';

export type Getters = {
  users(state: State): User;
}

export const getters: GetterTree<State, RootState> & Getters = {
  users: (state) => state.users,
};
