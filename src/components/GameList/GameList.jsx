import React, { useState, useEffect } from "react";
import style from "./GameList.module.scss";
import TicTacToe from "../TicTacToe/TicTacToe";
import RockPaperScissors from "../RockPaperScissors/RockPaperScissors";
import { useSelector, useDispatch } from "react-redux";
import { selectGame } from "../../store/actions";
import Game2048 from "../Game2048/Game2048";

function GameList() {
  const dispatch = useDispatch();
  const selectedGame = useSelector((state) => state.game);
  const [isGameSelected, setIsGameSelected] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const buttons = document.querySelectorAll(`.${style.option}`);

      buttons.forEach((button) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty("--mouse-x", `${x}px`);
        button.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleGameSelect = (gameId) => {
    dispatch(selectGame(gameId));
    setIsGameSelected(true);
  };

  return (
    <div className={style.gameList}>
      {!selectedGame && (
        <>
          <button
            className={style.option}
            onClick={() => handleGameSelect("TicTacToe")}
          >
            TicTacToe
          </button>
          <button
            className={style.option}
            onClick={() => handleGameSelect("RockPaperScissors")}
          >
            Rock Paper Scissors
          </button>
          <button
            className={style.option}
            onClick={() => handleGameSelect("Game2048")}
          >
            2048
          </button>
          <button className={style.option} onClick={() => {}}>
            Coming soon...
          </button>
        </>
      )}

      {selectedGame === "TicTacToe" && (
        <div
          className={`${style.gameContainer} ${
            isGameSelected ? style.fadeIn : ""
          }`}
        >
          <TicTacToe />
        </div>
      )}
      {selectedGame === "RockPaperScissors" && (
        <div
          className={`${style.gameContainer} ${
            isGameSelected ? style.fadeIn : ""
          }`}
        >
          <RockPaperScissors />
        </div>
      )}
      {selectedGame === "Game2048" && (
        <div
          className={`${style.gameContainer} ${
            isGameSelected ? style.fadeIn : ""
          }`}
        >
          <Game2048 />
        </div>
      )}
    </div>
  );
}

export default GameList;
