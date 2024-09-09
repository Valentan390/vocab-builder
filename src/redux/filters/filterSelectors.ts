import { RootState } from "../stor";

export const selectCategories = (state: RootState) => state.filters.categories;

export const selectFilters = (state: RootState) => state.filters.filters;

export const selectFiltersRecommend = (state: RootState) =>
  state.filters.filtersRecommend;
