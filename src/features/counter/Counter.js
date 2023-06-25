import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
// import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const turn = useSelector((state) => state.counter.turn);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        Turn: {turn}
      </div>
    </div>
  );
}
