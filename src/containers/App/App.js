import React, { useState } from 'react';
import Field from './../../components/Field/Field'
import './App.css';
import random from '../../functions/random';
import RestartBtn from '../../components/RestartBtn/RestartBtn';

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
  const [cells, useCells] = useState(cellsInit());
  const Restart=()=>{
    useCells(cellsInit());
  }
  const OnCellClick=(index)=>{
    
  }
  return (
    <div>
      <Field cells={cells}/>
      <RestartBtn Restart={Restart}/>
    </div>
  );
}

export default App;
