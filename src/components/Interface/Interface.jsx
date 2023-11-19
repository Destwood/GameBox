// /src/components/Interface/Interface.jsx
import React from "react";
import style from "./Interface.module.scss";
import { useSelector, useDispatch } from "react-redux"; // Додайте імпорт useSelector
import { clearGame } from "../../store/actions";

import back from "../../assets/back.svg";

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
          <img src={back} alt="" />
        </button>
      ) : null}
    </div>
  );
}

export default Interface;
