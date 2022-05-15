import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Board from './components/Board'

const App = () => {
  return (
    <div>
      <h1>Tic Tac Toe Game</h1>
      <Board/>
    </div>
  );
};

export default App;
