import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./stintDetailsInitialState";

const laptimeSlice = createSlice({
  name: "laptime",
  initialState: initialState,
  reducers: {
    laptimeMinuteUpdate(state, action) {
      return {
        ...state,
        laptimeMinutes: action.payload,
      };
    },
    laptimeSecondsUpdate(state, action) {
      return {
        ...state,
        laptimeSeconds: action.payload,
      };
    },
    fuelTankLiterUpdate(state, action) {
      return {
        ...state,
        fuelTankLiter: action.payload,
      };
    },
  },
});

export const {
  laptimeMinuteUpdate,
  laptimeSecondsUpdate,
  fuelTankLiterUpdate,
} = laptimeSlice.actions;
export default laptimeSlice.reducer;
