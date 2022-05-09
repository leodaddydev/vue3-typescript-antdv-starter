import { RootState } from "@/store/types";
import { GetterTree } from "vuex";
import { AuthState } from "./state";

export const getters: GetterTree<AuthState, RootState> = {
  isAuthenticated(state: AuthState) {
    return state.isAuthenticated
  }
};