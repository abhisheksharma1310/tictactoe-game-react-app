import Board from './components/Board'
import './styles/root.scss'
import { useState } from "react";
import { calculateWinner } from './helper';

const App = () => {

  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(boardState);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : '0'}`;

  const handleSquareClick = (position) => {

    if(boardState[position] || winner){
      return;
    }

    setBoardState((prev) => {
      return prev.map((square, pos) => {
        if(pos === position) {
          return isXNext ? 'X' : '0';
        }
        return square;
      });
    });
    setIsXNext((prev) => !prev);
  };


  return (
    <div className='app'>
      <h1>Tic Tac Toe Game</h1>
      <h2>{message}</h2>
      <Board boardState={boardState} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
