import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

import { toggle_count } from "../store";
import { inc, dec, inc_10 } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterr.counter);
  const display = useSelector((state) => state.toggle.display);

  const incHandler = () => {
    dispatch(inc());
  };
  const decHandler = () => {
    dispatch(dec());
  };

  const toggleCounterHandler = () => {
    dispatch(toggle_count());
  };
  const increaseHandler = () => {
    dispatch(inc_10(10));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {display && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incHandler}>Inc</button>
        <button onClick={increaseHandler}>Inc by 10</button>
        <button onClick={decHandler}>Dec</button>
      </div>
      <button onClick={toggleCounterHandler}>
        {display ? "Hide" : "Show"} counter
      </button>
    </main>
  );
};

export default Counter;
// class Counter extends Component {
//   incHandler() {
//     this.props.increment();
//   }
//   decHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>-- {this.props.counter} --</div>
//         <div>
//           <button onClick={this.incHandler.bind(this)}>Inc</button>
//           <button onClick={this.decHandler.bind(this)}>Dec</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INC" }),
//     decrement: () => dispatch({ type: "DEC" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
