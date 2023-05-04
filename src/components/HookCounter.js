import React, { useState } from 'react';
// example of use state
// updating state from previous state value
function HookCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <button onClick={() => setCount(initialCount)}>Count {count}</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment {count}
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        decrement {count}
      </button>
      <button onClick={incrementFive}>increment 5</button>
    </div>
  );
}

export default HookCounter;
