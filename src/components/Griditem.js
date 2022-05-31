import React from 'react';

export default function Griditem({color, onClick, value}) {
  return (
    <div className="grid-item" style={{backgroundColor: color}} onClick={onClick}>{value}</div>
  )
}