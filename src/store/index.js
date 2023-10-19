import { configureStore } from "@reduxjs/toolkit";
import { dishSliceReducer } from "./slices/dishSlice";

export const store = configureStore({
  reducer: {
    dish: dishSliceReducer,
  },
});
