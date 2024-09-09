import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  addNewWordThunk,
  craeteNewWordThunk,
  deleteWordThunk,
  editWordThunk,
  getAllUserWordsThunk,
  getAllWordsThunk,
  getChecingResultTasksThunk,
  getWordsTasksUserThunk,
  statisticsThunk,
} from "./operationsWord";
import {
  ICheckingResultTasks,
  ICreateNewWord,
  ITasksWordsUser,
} from "../../helpers/interfeceData";

interface IUserWords {
  results: ICreateNewWord[];
  totalPages: number;
  page: number;
  perPage: number;
}

interface IInitialState {
  checkingResultTasks: ICheckingResultTasks[];
  tasksUser: ITasksWordsUser;
  idWords: string;
  userWords: IUserWords;
  allWords: IUserWords;
  totalCount: number;
  craeteNewWord: ICreateNewWord;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: IInitialState = {
  checkingResultTasks: [],
  tasksUser: { tasks: [] },
  idWords: "",
  userWords: {
    results: [],
    totalPages: 10,
    page: 1,
    perPage: 1,
  },
  allWords: { results: [], totalPages: 10, page: 1, perPage: 1 },
  totalCount: 0,
  craeteNewWord: {
    _id: "",
    en: "",
    ua: "",
    category: "",
    isIrregular: true,
    owner: "",
    progress: 0,
  },
  isLoading: false,
  error: undefined,
};

const handlePendingAction: CaseReducer<IInitialState> = (state) => {
  state.error = undefined;
  state.isLoading = true;
};

const handleRejectedAction: CaseReducer<
  IInitialState,
  PayloadAction<string | undefined>
> = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    setIdWord: (state, action: PayloadAction<string>) => {
      state.idWords = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(statisticsThunk.pending, handlePendingAction)
      .addCase(statisticsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(statisticsThunk.rejected, handleRejectedAction)

      .addCase(craeteNewWordThunk.pending, handlePendingAction)
      .addCase(
        craeteNewWordThunk.fulfilled,
        (state, action: PayloadAction<ICreateNewWord>) => {
          state.isLoading = false;
          state.userWords.results = [
            ...state.userWords.results,
            action.payload,
          ];
          state.craeteNewWord = action.payload;
          state.totalCount = state.totalCount + 1;
        }
      )
      .addCase(craeteNewWordThunk.rejected, handleRejectedAction)

      .addCase(getAllUserWordsThunk.pending, handlePendingAction)
      .addCase(
        getAllUserWordsThunk.fulfilled,
        (state, action: PayloadAction<IUserWords>) => {
          state.isLoading = false;
          state.userWords = action.payload;
        }
      )
      .addCase(getAllUserWordsThunk.rejected, handleRejectedAction)

      .addCase(getAllWordsThunk.pending, handlePendingAction)
      .addCase(
        getAllWordsThunk.fulfilled,
        (state, action: PayloadAction<IUserWords>) => {
          state.isLoading = false;
          state.allWords = action.payload;
        }
      )
      .addCase(getAllWordsThunk.rejected, handleRejectedAction)

      .addCase(editWordThunk.pending, handlePendingAction)
      .addCase(editWordThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.userWords.results.findIndex(
          (word) => word._id === action.payload._id
        );
        if (index !== -1) {
          state.userWords.results[index] = action.payload;
        }
      })
      .addCase(editWordThunk.rejected, handleRejectedAction)

      .addCase(deleteWordThunk.pending, handlePendingAction)
      .addCase(deleteWordThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.totalCount = state.totalCount - 1;
        state.userWords.results = state.userWords.results.filter(
          (word) => word._id !== action.payload.id
        );
      })
      .addCase(deleteWordThunk.rejected, handleRejectedAction)

      .addCase(addNewWordThunk.pending, handlePendingAction)
      .addCase(addNewWordThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.totalCount = state.totalCount + 1;
      })
      .addCase(addNewWordThunk.rejected, handleRejectedAction)

      .addCase(getWordsTasksUserThunk.pending, handlePendingAction)
      .addCase(
        getWordsTasksUserThunk.fulfilled,
        (state, action: PayloadAction<ITasksWordsUser>) => {
          state.isLoading = false;
          state.tasksUser = action.payload;
        }
      )
      .addCase(getWordsTasksUserThunk.rejected, handleRejectedAction)

      .addCase(getChecingResultTasksThunk.pending, handlePendingAction)
      .addCase(getChecingResultTasksThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.checkingResultTasks = action.payload;
      })
      .addCase(getChecingResultTasksThunk.rejected, handleRejectedAction);
  },
});

export const { setIdWord } = wordsSlice.actions;
export const wordsReducer = wordsSlice.reducer;
