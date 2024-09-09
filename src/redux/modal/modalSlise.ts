import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  openModal: boolean;
  contentModal: string;
}

const initialState: InitialState = {
  openModal: false,
  contentModal: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
    setContentModal: (state, action) => {
      state.contentModal = action.payload;
    },
  },
});

export const { setContentModal, setOpenModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
