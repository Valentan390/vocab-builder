import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { statisticsThunk } from "./operationsStatistics";

interface IInitialState {
  totalCount: number;
  isTotalCount: boolean;
  errorTotalCount: string | undefined;
}

const initialState: IInitialState = {
  totalCount: 0,
  isTotalCount: false,
  errorTotalCount: undefined,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(statisticsThunk.pending, (state) => {
        state.isTotalCount = true;
        state.errorTotalCount = undefined;
      })
      .addCase(
        statisticsThunk.fulfilled,
        (state, action: PayloadAction<{ totalCount: number }>) => {
          state.isTotalCount = false;
          state.totalCount = action.payload.totalCount;
        }
      )
      .addCase(statisticsThunk.rejected, (state, action) => {
        state.isTotalCount = false;
        state.errorTotalCount = action.payload;
      });
  },
});

export const statisticsReducer = statisticsSlice.reducer;
