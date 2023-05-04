import React, { useState, useMemo } from 'react';

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
// useMemo will recompute if the cached value is changed
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count one-{counterOne}</button>
      </div>
      <span>{isEven ? 'even' : 'odd'}</span>
      <div>
        <button onClick={incrementTwo}>Count Two-{counterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;
