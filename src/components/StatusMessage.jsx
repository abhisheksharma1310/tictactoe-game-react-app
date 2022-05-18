import React from "react";

const StatusMessage = ({ winner, current }) => {
  const noMoveLeft = current.boardState.every((el) => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMoveLeft &&
        `Next player is ${current.isXNext ? "X" : "0"}`}
      {!winner && noMoveLeft && "X and 0 tied"}
    </h2>
  );
};

export default StatusMessage;
