import React from 'react';
import './App.css';
import { calculateNeighborCount } from './helper_functions/calculateNeighborCount';
import { createGrid } from './helper_functions/createGrid';
import { mineGrid } from './helper_functions/mineGrid';

const App: React.FC = () => {
  const grid = calculateNeighborCount(mineGrid(createGrid(rows, cols), numberOfMines));

  return (
    <div className="App">
      <Game grid={grid}/>
    </div>
  );
};

export default App;
