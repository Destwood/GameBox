import React, { useState } from "react";
import style from "./GameList.module.scss";
import TicTacToe from "../TicTacToe/TicTacToe";
import RockPaperScissors from "../RockPaperScissors/RockPaperScissors";

function GameList() {
  const [game, setGame] = useState(null);

  return (
    <div className={style.gameList}>
      {!game && (
        <>
          <button
            className={style.option}
            onClick={() => {
              setGame(1);
            }}
          >
            TicTacToe
          </button>
          <button
            className={style.option}
            onClick={() => {
              setGame(2);
            }}
          >
            Rock Paper Scissors
          </button>
        </>
      )}
      {game === 1 && <TicTacToe />}
      {game === 2 && <RockPaperScissors />}
    </div>
  );
}

export default GameList;
