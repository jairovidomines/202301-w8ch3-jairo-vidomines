import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { breadsReducer } from "./features/breads/breadsSlice";

export const store = configureStore({
  reducer: { breads: breadsReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
