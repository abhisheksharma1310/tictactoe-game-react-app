import React from "react";
import Square from "./Square";
import { useState } from "react";

const Board = () => {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const handleSquareClick = (position) => {

    if(boardState[position]){
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

  const renderSquare = (position) => {
    return (
      <Square
        value={boardState[position]}
        onClick={() => {
          handleSquareClick(position);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
