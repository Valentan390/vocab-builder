import { RootState } from "../stor";

export const selectUser = (state: RootState) => state.userAuth.user;
export const selectToken = (state: RootState) => state.userAuth.token;
export const selectIsUserAuth = (state: RootState) => state.userAuth.isUserAuth;
export const selectIsRefreshing = (state: RootState) =>
  state.userAuth.isRefreshing;
export const selectError = (state: RootState) => state.userAuth.error;
