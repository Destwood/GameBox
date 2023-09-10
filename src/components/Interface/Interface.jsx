// /src/components/Interface/Interface.jsx
import React from "react";
import style from "./Interface.module.scss";
import { useSelector, useDispatch } from "react-redux"; // Додайте імпорт useSelector
import { clearGame } from "../../store/actions";

function Interface() {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game); // Отримайте значення game зі стейту Redux

  const handleClearGame = () => {
    dispatch(clearGame());
  };

  return (
    <div className={style.interface}>
      {game ? ( // Перевірка на наявність game
        <button className={style.btn} onClick={handleClearGame}>
          &lt;
        </button>
      ) : null}
    </div>
  );
}

export default Interface;
