import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const dispatch = useDispatch();

  const counterReducer = useSelector((state) => state.counterReducer);
  const { counter } = counterReducer;
  return (
    <div className='Counter'>
      <div>{counter}</div>
      <button type='button' onClick={() => dispatch({ type: 'INCREMENT' })}>
        INCREMENT
      </button>
      <button type='button' onClick={() => dispatch({ type: 'DECREMENT' })}>
        DECREMENT
      </button>
    </div>
  );
}

export default Counter;
