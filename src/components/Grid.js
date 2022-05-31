import React, {useState, useEffect, useRef} from 'react';
import Griditem from './Griditem';

export default function Grid({size}) {
  const [selected, setSelected] = useState([]);
  const [playBack, setPlayBack] = useState([]);

  const [play, setPlay] = useState(false);
  const gridRef = useRef();

  useEffect(() => {
    gridRef.current = {
      totalSelected: [...selected]
    }
    setSelected([]);

    setPlayBack([gridRef.current.totalSelected.unshift()]);

    setInterval(() => {
      setSelected([2])
    }, 1000);

    // for (let i = 0; i < totalSelected.length; i++) {
    //   setTimeout(() => {
    //     setSelected([totalSelected[i]]);
    //   }, 1000)
    // }
  
    // return () => {
    //   clearTimeout(gridRef.interval);
    // }
  }, [play])

  useEffect(() => {
    setTimeout(() => {
      if (gridRef.current.totalSelected.length) setPlayBack([gridRef.current.totalSelected.unshift()]);
    }, 1000)
  }, [playBack])

  const handleOnClick = (e, i) => {
    console.log(e, i)
    setSelected([...selected, i])
  }

  const getColor = (i) => {
    if (selected.length) {
      return selected.includes(i)  ? "blue" : "white"
    }
    return playBack.includes(i) ? "blue" : "white"
  }
  const generateLayout = () => {
    const gridItems = [];
    for (let i = 1; i <= (size * size); i++) {
      gridItems.push(
        <Griditem 
          color={getColor(i)} 
          onClick={(e) => handleOnClick(e, i)} 
          value={i} 
          key={i}
          />);
    }

    return gridItems;
  }

  return (
    <div className="grid" style={{width: `${size * 55}px`}}>
      {generateLayout()}
      <button onClick={() => setPlay(true)} style={{marginTop: '50px'}}>play</button>
    </div>
  )
}