import React, { useState } from "react";
import style from "./TicTacToe.module.scss";

function TicTacToe() {
  const start = [``, ``, ``, ``, ``, ``, ``, ``, ``];
  const [game, setGame] = useState(start);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState();

  const checkWinner = (game) => {
    const winningCombinations = [
      // Horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (game[a] && game[a] === game[b] && game[b] === game[c]) {
        return game[a];
      }
    }
    return null;
  };

  const Turn = (index) => {
    if (winner === "X") {
      setScore([score[0] + 1]);
      return;
    }
    if (winner === "O") {
      setScore([score[1] + 1]);
      return;
    }
    if (game[index] === "") {
      const updatedGame = [...game];
      updatedGame[index] = player;

      setGame(updatedGame);
      checkWinner(game);
      setPlayer(player === "X" ? "O" : "X");
    }
  };
  const Restart = () => {
    setGame(start);
  };
  const Reset = () => {
    setGame(start);
    setPlayer("X");
    setWinner([0, 0]);
  };
  ("");
  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <h1 className={style.title}>TicTacToe</h1>
        <div className="">Score: </div>
        <div className="">{`X: ${score.X} O: ${score.O}`}</div>
        <div className="">Turn: {player}</div>
      </div>
      <div className={style.game}>
        {start.map((value, index) => (
          <div
            key={index}
            className={`${index % 2 === 0 ? style.grey : ""}`}
            onClick={() => {
              Turn(index);
            }}
          >
            {game[index]}
          </div>
        ))}
      </div>

      <div className={style.control}>
        <button
          onClick={() => {
            Restart();
          }}
        >
          Restart
        </button>
        <button
          onClick={() => {
            Reset();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;
