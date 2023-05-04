import React, { useEffect, useState } from 'react';

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log('mouse event');
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log('>>>use effect called<<<');
    window.addEventListener('mousemove', logMousePosition);
    // this is component cleanup code which is use to cancel subscriptions ,remove event listeners 
    return () => {
      console.log('>>>component unmounting code<<<');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);
  return (
    <div>
      hooks X-{x} Y-{y}
    </div>
  );
}

export default HookMouse;
