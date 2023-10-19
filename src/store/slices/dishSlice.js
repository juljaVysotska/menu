import { createSlice, nanoid } from "@reduxjs/toolkit";

export const dishSlice = createSlice({
  name: "dishSlice",
  initialState: {
    dishes: [],
  },
  reducers: {
    addDish: (state, action) => {
      state.dishes.push({
        name: action.payload.name,
        dishId: action.payload.dishId,
        id: nanoid(),
      });
    },
    deleteDish: (state, action) => {
      const updated = state.dishes.filter(
        el => el.dishId !== action.payload.dishId,
      );

      state.dishes = updated;
    },
  },
});

export const selectDishes = state => state.dishes;

// Action creators are generated for each case reducer function
export const { addDish, deleteDish } = dishSlice.actions;

export const dishSliceReducer = dishSlice.reducer;
