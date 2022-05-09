import { ActionTree } from "vuex";
import { UserState } from "./state";
import { RootState } from '@/store/types'

export const actions: ActionTree<UserState, RootState> = {
  async me({ commit }) {
    commit('setUser', { username: 'admin', fullname: 'Admin' })
  }
};