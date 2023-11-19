import React, { useState, useEffect } from "react";
import style from "./TicTacToe.module.scss";

function TicTacToe() {
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [board, setBoard] = useState(Array(9).fill(""));
  const [winnerComb, setWinnerComb] = useState([]);
  const [gameToRestart, setGameToRestart] = useState(false);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    if (!board.includes("") || gameToRestart) {
      Reset();
    } else if (!board[index]) {
      const newBoard = [...board];
      newBoard[index] = xIsNext ? "X" : "O";
      setBoard(newBoard);
      setXIsNext(!xIsNext);
      calculateWinner(board);
    }
  };

  useEffect(() => {
    calculateWinner(board);
  }, [board]);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinnerComb([a, b, c]);
        setGameToRestart(true);
        setScore((prevScore) => ({
          ...prevScore,
          [squares[a]]: prevScore[squares[a]] + 1,
        }));
      }
    }
  };

  const Reset = () => {
    const newBoard = Array(9).fill("");
    setBoard(newBoard);
    setWinnerComb([]);
    setGameToRestart(false);
  };

  return (
    <div className={style.container}>
      <div className={style.left}>
        <span className={`${xIsNext ? style.next : style.default}`}>X</span>
        Player 1: {score.X}
      </div>
      <div className={style.gameBoard}>
        {board.map((item, index) => (
          <div
            key={index}
            className={`${style.cell} ${
              winnerComb.includes(index) ? style.winner : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={style.right}>
        <span className={`${xIsNext ? style.default : style.next}`}>O</span>
        Player 2: {score.O}
      </div>
    </div>
  );
}

export default TicTacToe;
