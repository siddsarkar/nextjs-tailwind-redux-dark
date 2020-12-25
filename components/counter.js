import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  incrementCount,
  resetCount,
} from "../store/actions/counterActions";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='counter'>
      <h1 className='m-2 text-3xl dark:text-white'>
        Count: <span>{count}</span>
      </h1>
      <div className='grid grid-cols-3 gap-1'>
        <button
          className='btn btn-blue'
          onClick={() => dispatch(incrementCount())}
        >
          +1
        </button>
        <button
          className='btn btn-blue'
          onClick={() => dispatch(decrementCount())}
        >
          -1
        </button>
        <button className='btn btn-blue' onClick={() => dispatch(resetCount())}>
          Reset
        </button>
      </div>
      <style>
        {`
         .counter {
           text-align:center;
            }
      `}
      </style>
    </div>
  );
};

export default Counter;
