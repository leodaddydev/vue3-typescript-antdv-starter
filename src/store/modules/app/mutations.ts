import { MutationTree } from 'vuex';
import type { AppState } from './state'

export const mutations: MutationTree<AppState> = {
  configTheme(state: any, config: any) {
    state.config = config
    console.log(` state.config`, state.config)
  },
};