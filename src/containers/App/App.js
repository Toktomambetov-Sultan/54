import React, { useState } from 'react';
import Field from './../../components/Field/Field'
import './App.css';
import './../../fonts/fontawesome-free-5.14.0-web/css/all.min.css'
import random from '../../functions/random';
import RestartBtn from '../../components/RestartBtn/RestartBtn';
import TriesBlock from '../../components/TriesBlock/TriesBlock';
import EndGame from '../../components/EndGame/EndGame';

function App() {
  const cellsInit = () => {
    const cellsTemplate = [];
    for (let i = 0; i < 36; i++) {
      cellsTemplate.push({
        isOpen: false,
        hasItem: false,
      });
    }
    const index = random(cellsTemplate.length);
    cellsTemplate[index].hasItem = true;
    return cellsTemplate;
  }
  const [cells, setCells] = useState(cellsInit());
  const [endGame, setEndGame] = useState(false);
  const Restart = () => {
    setCells(cellsInit());
    setEndGame(false);
  }
  const onCellClick = (index) => {
    const cellsCopy = ([...cells]);
    const cellCopy = { ...cellsCopy[index] };
    cellCopy.isOpen = true;
    cellsCopy[index] = cellCopy;
    setEndGame(cellCopy.isOpen && cellCopy.hasItem ? true : false);
    setCells(cellsCopy);
  }
  const tries = cells.filter(cell => cell.isOpen).length;
  return (
    <div>
      <Field cells={cells} onCellClick={onCellClick} endGame={endGame}/>
      {
        endGame ?
          (<>
          <EndGame tries={tries}/>
          </>) :
          (<>
            <TriesBlock tries={tries} />
          </>)
      }
      <RestartBtn Restart={Restart} />
    </div>
  );
}

export default App;
