import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';
import SizeInput from './components/SizeInput';

function App() {
  const [size, setSize] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const handleSubmit = () => {

    if (size) setShowGrid(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Blink It
        </p>
      </header>
      <div className="blink-body">
        {showGrid 
          ? <Grid size={size} />
          : <SizeInput size={size} setSize={setSize} onClick={handleSubmit} />
        }
      </div>
    </div>
  );
}

export default App;
