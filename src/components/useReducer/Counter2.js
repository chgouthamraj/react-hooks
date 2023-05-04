import React, { useReducer } from 'react';
// using state
const initialState = {
  firtCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        firtCounter: state.firtCounter + action.value,
      };
    case 'decrement':
      return {
        ...state,
        firtCounter: state.firtCounter - action.value,
      };
    case 'increment2':
      return {
        ...state,
        secondCounter: state.secondCounter + action.value,
      };
    case 'decrement2':
      return {
        ...state,
        secondCounter: state.secondCounter - action.value,
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count.firtCounter}</div>
      <div>Count - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
        Increment5
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
        Decrement5
      </button>
      <button onClick={() => dispatch({ type: 'increment2', value: 2 })}>
        Increment count2
      </button>
      <button onClick={() => dispatch({ type: 'decrement2', value: 2 })}>
        Decrement count2
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter2;
