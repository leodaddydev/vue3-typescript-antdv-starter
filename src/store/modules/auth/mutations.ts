import { MutationTree } from 'vuex';
import type { AuthState } from './state'
export type LoginResonse = {
  access_token: ''
}
export const mutations: MutationTree<AuthState> = {
  setLogedIn(state: AuthState, data: LoginResonse) {
    localStorage.setItem(`access-token`, data.access_token)
    state.isAuthenticated = true;
  }
};