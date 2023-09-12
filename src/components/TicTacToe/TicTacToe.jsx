import React, { useState } from "react";
import style from "./TicTacToe.module.scss";

function TicTacToe() {
  const start = [``, ``, ``, ``, ``, ``, ``, ``, ``];
  const [game, setGame] = useState(start);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState();

  const [showNotification, setShowNotification] = useState(false);

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
        setWinner(player);
        Notification();

        setScore((prevScore) => ({
          ...prevScore,
          [game[a]]: prevScore[game[a]] + 1,
        }));
        Restart();
      }
    }
    if (
      game[0] !== "" &&
      game[1] !== "" &&
      game[2] !== "" &&
      game[3] !== "" &&
      game[4] !== "" &&
      game[5] !== "" &&
      game[6] !== "" &&
      game[7] !== "" &&
      game[8] !== ""
    ) {
      setWinner("tie");
      Notification();
      Restart();
    }
    return null;
  };

  const Restart = () => {
    setGame(start);
  };

  const Reset = () => {
    setGame(start);
    setPlayer("X");
    setWinner({ X: 0, O: 0 });
  };
  const Notification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const Turn = (index) => {
    if (game[index] === "") {
      const updatedGame = [...game];
      updatedGame[index] = player;
      setGame(updatedGame);
      setPlayer(player === "X" ? "O" : "X");
      checkWinner(updatedGame);
    }
  };

  const isCellEmpty = (index) => {
    return game[index] === "";
  };

  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <h1 className={style.title}>TicTacToe</h1>
        <div className={style.score}>
          <div className={style.scoreX}>X: {score.X}</div>
          <div className={style.scoreO}>O: {score.O}</div>
        </div>

        <div className={style.player}>
          <span className={`${player === "X" ? style.red : style.blue}`}>
            {player}
          </span>
        </div>
      </div>
      <div className={style.game}>
        {start.map((value, index) => (
          <div
            key={index}
            className={`${index % 2 === 0 ? style.grey : ""} ${
              game[index] === "X" ? style.red : style.blue
            }`}
            onClick={() => {
              if (isCellEmpty(index)) {
                Turn(index);
              }
            }}
          >
            {game[index]}
          </div>
        ))}
      </div>

      <div className={style.control}>
        <button
          className={style.button}
          onClick={() => {
            Restart();
          }}
        >
          Restart
        </button>
        <button
          className={style.button}
          onClick={() => {
            Reset();
          }}
        >
          Reset score
        </button>
      </div>

      {showNotification && <div className={style.notification}>{winner}</div>}
    </div>
  );
}

export default TicTacToe;
