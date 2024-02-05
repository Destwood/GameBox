import React, { useState } from "react";
import style from "./Game2048.module.scss";

function Game2048() {
  const [talbe, setTable] = useState([[], [], [], []]);
  return (
    <div className={style.container}>
      <div className={style.table}>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
      </div>
    </div>
  );
}

export default Game2048;
