// export const INC = "INC";
// export const DEC = "DEC";
// export const TOGGLE_COUNT = "TOGGLE_COUNT";
// export const INCBY10 = "INC_10";
//import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
};
const initialToggleState = {
  display: true,
};

const toggleSlice = createSlice({
  name: "toggle_slice",
  initialState: initialToggleState,
  reducers: {
    toggle_count: (state) => {
      state.display = !state.display;
    },
  },
});

const counterSlice = createSlice({
  name: "counter_slice",
  initialState: initialCounterState,
  reducers: {
    inc: (state) => {
      state.counter++;
    },
    dec: (state) => {
      state.counter--;
    },
    inc_10: (state, action) => {
      state.counter = state.counter + action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    counterr: counterSlice.reducer,
    toggle: toggleSlice.reducer,
  },
});

//Old way of using redux
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INC:
//       return { ...state, counter: state.counter + 1 };
//     case DEC:
//       return { ...state, counter: state.counter - 1 };

//     case TOGGLE_COUNT: {
//       return { ...state, hidden: !state.hidden };
//     }
//     case INCBY10: {
//       return { ...state, counter: state.counter + 10 };
//     }
//     default:
//       return state;
//   }
// };
// const store = createStore(reducer);

export const { toggle_count } = toggleSlice.actions;
export const { inc, dec, inc_10 } = counterSlice.actions;
export default store;
