import React, { useState } from 'react';

export default function HookCounterOne() {
    //useState will not automatically update the object so we need to it manually using spread operator(for objects)
  const [name, setName] = useState({ firstName: '', lastName: '' });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>first name-{name.firstName}</h2>
        <h2>last name-{name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}
