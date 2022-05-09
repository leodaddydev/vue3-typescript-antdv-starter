import { MutationTree } from 'vuex';
import type { UserState } from './state'

export const mutations: MutationTree<UserState> = {
  setUser(state: UserState, user: any) {
    state.data = user;
    localStorage.setItem(`info`, JSON.stringify(user))
    localStorage.setItem(`type`, user.userType)
  }
};