import Board from "./components/Board";
import "./styles/root.scss";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import { useState } from "react";
import { calculateWinner } from "./helper";

const NEW_GAME = [
  {
    boardState: Array(9).fill(null),
    isXNext: true,
  },
];

const App = () => {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.boardState);

  const handleSquareClick = (position) => {
    if (current.boardState[position] || winner) {
      return;
    }
    setHistory((prev) => {
      const last = prev[prev.length - 1];

      const newBoardState = last.boardState.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? "X" : "0";
        }
        return square;
      });
      return prev.concat({ boardState: newBoardState, isXNext: !last.isXNext });
    });
    setCurrentMove((prev) => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        Tic <span className="text-green">Tac</span> Toe Game
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        boardState={current.boardState}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? "active" : ""}`}
      >
        Start New Game
      </button>
      <h2 style={{fontWeight: 'normal'}}>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls"/>
    </div>
  );
};

export default App;
