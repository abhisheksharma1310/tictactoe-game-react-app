import Board from './components/Board'
import './styles/root.scss'
import { useState } from "react";
import { calculateWinner } from './helper';

const App = () => {

  const [history, setHistory] = useState([{
    boardState: Array(9).fill(null), isXNext: true
  }]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.boardState);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXNext ? 'X' : '0'}`;

  const handleSquareClick = (position) => {
    if(current.boardState[position] || winner){
      return;
    }
    setHistory((prev) => {

      const last = prev[prev.length-1];

      const newBoardState = last.boardState.map((square, pos) => {
        if(pos === position) {
          return last.isXNext ? 'X' : '0';
        }
        return square;
      });
      return prev.concat({boardState: newBoardState, isXNext: !last.isXNext})
    });
    setCurrentMove(prev => prev+1);
  };


  return (
    <div className='app'>
      <h1>Tic Tac Toe Game</h1>
      <h2>{message}</h2>
      <Board boardState={current.boardState} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
