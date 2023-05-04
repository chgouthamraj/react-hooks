import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
//we specify state and props in the array so when there is change in those state or props then only ot changes
  useEffect(() => {
    console.log('>>>use effect -updating document title<<<');
    document.title = `you clicked ${count} times`;
  },[count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}> Click {count} times</button>
    </div>
  );
}

export default UseEffect;
