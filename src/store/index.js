import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice";
import CounterReducer from "./CounterSlice";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    auth: AuthReducer,
  },
});
export default store;

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
