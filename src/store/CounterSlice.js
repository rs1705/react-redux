import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  display: true,
};

const CounterSlice = createSlice({
  name: "counter_slice",
  initialState: initialCounterState,
  reducers: {
    inc: (state) => {
      state.counter++, state.display;
    },
    dec: (state) => {
      state.counter--;
      state.display;
    },
    inc_10: (state, action) => {
      (state.counter = state.counter + action.payload), state.display;
    },
    toggle_count: (state) => {
      state.counter, (state.display = !state.display);
    },
  },
});
export const { inc, dec, inc_10, toggle_count } = CounterSlice.actions;

export default CounterSlice.reducer;
