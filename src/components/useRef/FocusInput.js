import React, { useEffect, useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
      // to focus on the elemnt when page loads
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default FocusInput;
