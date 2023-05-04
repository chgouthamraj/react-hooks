import React from 'react';

function Count({ text, count }) {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}
// by using React.memo we can reduce unnecessary re-renders it renders only when props and state of the component is changed
export default React.memo(Count);
