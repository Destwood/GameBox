import React, { useState } from "react";
import style from "./TicTacToe.module.scss";

function TicTacToe() {
  const start = [
    [``, ``, ``],
    [``, ``, ``],
    [``, ``, ``],
  ];
  const [game, setGame] = useState(start);
  const [score, setScore] = useState([0, 0]);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(); // here

  const Turn = (first, second) => {
    if (winner === "X") {
      setScore([(score[0] += 1)]);
      return; // here
    }
    if (winner === "O") {
      setScore([(score[1] += 1)]);
      return; // here
    }
    if (game[first][second] === ``) {
      const updatedGame = [...game];
      updatedGame[first][second] = player;

      setGame(updatedGame);
      if (
        // horizontal check
        (game[0][0] !== `` &&
          game[0][0] === game[0][1] &&
          game[0][1] === game[0][2]) ||
        (game[1][0] !== `` &&
          game[1][0] === game[1][1] &&
          game[1][1] === game[1][2]) ||
        (game[2][0] !== `` &&
          game[2][0] === game[2][1] &&
          game[2][1] === game[2][2]) ||
        //   vertical check
        (game[0][0] !== `` &&
          game[0][0] === game[1][0] &&
          game[1][0] === game[2][0]) ||
        (game[0][1] !== `` &&
          game[0][1] === game[1][1] &&
          game[1][1] === game[2][1]) ||
        (game[0][2] !== `` &&
          game[0][2] === game[1][2] &&
          game[1][2] === game[2][2]) ||
        //   diagonal check
        (game[1][1] !== `` &&
          game[0][0] === game[1][1] &&
          game[1][1] === game[2][2]) ||
        (game[1][1] !== `` &&
          game[0][2] === game[1][1] &&
          game[1][1] === game[2][0])
      ) {
        setWinner(player);
        console.log(`${player} winner`);
      }
      player === "X" ? setPlayer("O") : setPlayer("X"); // here
    }
  };

  return (
    <div className={style.wrapper}>
      <h1>TicTacToe</h1>
      <div className="">Score: </div>
      <div className="">
        Х: {score[0]}, O: {score[1]}
      </div>
      <table>
        <tr>
          <td
            onClick={() => {
              Turn(0, 0);
            }}
          >
            {game[0][0]}
          </td>
          <td
            onClick={() => {
              Turn(0, 1);
            }}
          >
            {game[0][1]}
          </td>
          <td
            onClick={() => {
              Turn(0, 2);
            }}
          >
            {game[0][2]}
          </td>
        </tr>
        <tr>
          <td
            onClick={() => {
              Turn(1, 0);
            }}
          >
            {game[1][0]}
          </td>
          <td
            onClick={() => {
              Turn(1, 1);
            }}
          >
            {game[1][1]}
          </td>
          <td
            onClick={() => {
              Turn(1, 2);
            }}
          >
            {game[1][2]}
          </td>
        </tr>
        <tr className={style.red}>
          <td
            onClick={() => {
              Turn(2, 0);
            }}
          >
            {game[2][0]}
          </td>
          <td
            onClick={() => {
              Turn(2, 1);
            }}
          >
            {game[2][1]}
          </td>
          <td
            onClick={() => {
              Turn(2, 2);
            }}
          >
            {game[2][2]}
          </td>
        </tr>
      </table>
      <button
        onClick={() => {
          setGame(start);
          setPlayer("X");
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default TicTacToe;
