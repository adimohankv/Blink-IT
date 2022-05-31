import React from 'react';

export default function SizeInput({size, setSize, onClick}) {
  return (
    <div>
      <input value={size} onChange={(e) => setSize(e.target.value)} />
      <button onClick={onClick}>Submit</button>
    </div>
  )
}