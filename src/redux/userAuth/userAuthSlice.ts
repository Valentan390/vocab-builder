import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  userLogOut,
  userLogin,
  userRefresh,
  userRegister,
} from "./operationsUserAuth";
import { User } from "../../helpers/interfeceData";

interface InitialState {
  user: User;
  token: string;
  isUserAuth: boolean;
  isRefreshing: boolean;
  error: string | undefined;
}

const initialState: InitialState = {
  user: { name: "", email: "", token: "" },
  token: "",
  isUserAuth: false,
  isRefreshing: false,
  error: undefined,
};

const handlePendingAction: CaseReducer<InitialState> = (state) => {
  state.error = initialState.error;
  state.isRefreshing = true;
};

const handleFulfilledAction: CaseReducer<InitialState, PayloadAction<User>> = (
  state,
  action
) => {
  state.isRefreshing = false;
  state.isUserAuth = true;
  state.user = action.payload;
  state.token = action.payload.token;
};

const handleRejectedAction: CaseReducer<
  InitialState,
  PayloadAction<string | undefined>
> = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, handlePendingAction)
      .addCase(userRegister.fulfilled, handleFulfilledAction)
      .addCase(userRegister.rejected, handleRejectedAction)

      .addCase(userLogin.pending, handlePendingAction)
      .addCase(userLogin.fulfilled, handleFulfilledAction)
      .addCase(userLogin.rejected, handleRejectedAction)

      .addCase(userLogOut.pending, handlePendingAction)
      .addCase(userLogOut.fulfilled, (state) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isUserAuth = initialState.isUserAuth;
        state.isRefreshing = initialState.isRefreshing;
        state.error = initialState.error;
      })
      .addCase(userLogOut.rejected, handleRejectedAction)

      .addCase(userRefresh.pending, handlePendingAction)
      .addCase(userRefresh.fulfilled, handleFulfilledAction)
      .addCase(userRefresh.rejected, handleRejectedAction);
  },
});

export const userAuthReducer = userAuthSlice.reducer;
