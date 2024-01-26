import React, { useState, useEffect } from "react";
import style from "./GameList.module.scss";
import TicTacToe from "../TicTacToe/TicTacToe";
import RockPaperScissors from "../RockPaperScissors/RockPaperScissors";
import { useSelector, useDispatch } from "react-redux";
import { selectGame } from "../../store/actions";

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
    setIsGameSelected(true); // Встановлюємо прапорець, що гру вибрано
  };

  return (
    <div className={style.gameList}>
      {!selectedGame && (
        <>
          <button className={style.option} onClick={() => handleGameSelect(1)}>
            TicTacToe
          </button>
          <button className={style.option} onClick={() => handleGameSelect(2)}>
            Rock Paper Scissors
          </button>
          <button className={style.option} onClick={() => handleGameSelect(3)}>
            2048
          </button>
          <button className={style.option} onClick={() => {}}>
            Coming soon...
          </button>
        </>
      )}

      {selectedGame === 1 && (
        <div
          className={`${style.gameContainer} ${
            isGameSelected ? style.fadeIn : ""
          }`}
        >
          <TicTacToe />
        </div>
      )}
      {selectedGame === 2 && (
        <div
          className={`${style.gameContainer} ${
            isGameSelected ? style.fadeIn : ""
          }`}
        >
          <RockPaperScissors />
        </div>
      )}
    </div>
  );
}

export default GameList;
