import { RootState } from "@/store/types";
import { GetterTree } from "vuex";
import { AppState } from "./state";

export const getters: GetterTree<AppState, RootState> = {
  appConfig(state: AppState) {
    return state.config
  }
};