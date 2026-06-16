import { configureStore } from "@reduxjs/toolkit";
import letterSlice from "./letterSlice";
const store =configureStore({
  reducer: { letter:letterSlice },
});
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;

export default store;


