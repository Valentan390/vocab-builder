import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { wordCategoriesThunk } from "./operationsFilter";

interface IFilters {
  searchTerm: string;
  selectedCategory: string | null;
  typeVerb: boolean | null;
}

interface IInitialState {
  filters: IFilters;
  filtersRecommend: IFilters;
  categories: string[];
  isCategories: boolean;
  error: string | undefined;
}

const initialState: IInitialState = {
  filters: { searchTerm: "", selectedCategory: null, typeVerb: null },
  filtersRecommend: {
    searchTerm: "",
    selectedCategory: null,
    typeVerb: null,
  },
  categories: [],
  isCategories: false,
  error: undefined,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<IFilters>) => {
      state.filters = action.payload;
    },
    setFiltersRecommend: (state, action: PayloadAction<IFilters>) => {
      state.filtersRecommend = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(wordCategoriesThunk.pending, (state) => {
        state.isCategories = true;
        state.error = undefined;
      })
      .addCase(
        wordCategoriesThunk.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.isCategories = false;
          state.categories = action.payload;
        }
      )
      .addCase(
        wordCategoriesThunk.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isCategories = false;
          state.error = action.payload;
        }
      );
  },
});

export const { setFilters, setFiltersRecommend } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
