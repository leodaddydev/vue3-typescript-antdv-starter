import { RootState } from "@/store/types";
import { GetterTree } from "vuex";
import { UserState } from "./state";

export const getters: GetterTree<UserState, RootState> = {
  getUser(state: UserState) {
    return state.data
  }
};