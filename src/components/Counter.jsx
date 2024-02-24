import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  // ei hook diye state ta ke consume kore (state ta input ney)
  const { count } = useSelector((state) => state.counter);
  // console.log(count);

  const dispatch = useDispatch();

  return (
    <div>
      {/* onclick er moddhe  action gula import korte hobe from counterSlice*/}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />

      {/* ekhane je 5 pathachhi etai hocche payload */}
      <button onClick={() => dispatch(incrementByValue(5))}>
        Increment by 5
      </button>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
