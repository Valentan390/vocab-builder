import { RootState } from "../stor";
import { createSelector } from "@reduxjs/toolkit";

export const selectTotalCount = (state: RootState) => state.words.totalCount;

export const selectUserWords = (state: RootState) =>
  state.words.userWords.results;

export const selectAllWords = (state: RootState) =>
  state.words.allWords.results;

export const selectIdWord = (state: RootState) => state.words.idWords;

export const selectTotalPages = (state: RootState) =>
  state.words.userWords.totalPages;

export const selectPages = (state: RootState) => state.words.userWords.page;

export const selectTotalPagesAllWords = (state: RootState) =>
  state.words.allWords.totalPages;

export const selectPageAllWords = (state: RootState) =>
  state.words.allWords.page;

export const selectTasksUser = (state: RootState) =>
  state.words.tasksUser.tasks;

export const selectResultTasks = (state: RootState) =>
  state.words.checkingResultTasks;

export const selectIsLoading = (state: RootState) => state.words.isLoading;

export const createIdFilterWord = createSelector(
  [selectUserWords, selectIdWord],
  (words, id) => words.find((word) => word._id === id)
);
