import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Breads } from "../../../data/types";

const initialState: Breads = [];

const breadsSlice = createSlice({
  name: "breads",
  initialState,
  reducers: {
    loadBreads: (currentState, action: PayloadAction<Breads>) => [
      ...action.payload,
    ],
  },
});

export const breadsReducer = breadsSlice.reducer;
export const { loadBreads: loadBreadsActionCreator } = breadsSlice.actions;
