import { RootState } from "../stor";

export const selectStatistics = (state: RootState) =>
  state.statistics.totalCount;

export const selectIsStatistics = (state: RootState) =>
  state.statistics.isTotalCount;
