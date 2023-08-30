import React, { useState } from "react";
import style from "./RockPaperScissors.module.scss";

import rock from "./rock.svg";
import paper from "./paper.svg";
import scissors from "./scissors.svg";

function RockPaperScissors() {
  const [chosen, setChosen] = useState();
  const [enemy, setEnemy] = useState();

  const game = () => {
    const option = Math.floor(Math.random() * 3);

    for (let j = 1; j <= 10; j++) {
      for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
          switch (i) {
            case 0:
              setEnemy(rock);
              return;
            case 1:
              setEnemy(paper);
              break;
            case 2:
              setEnemy(scissors);
              break;
            default:
          }
        }, (j + i) * 200);
      }
    }

    switch (option) {
      case 0:
        setEnemy(rock);
        return;
      case 1:
        setEnemy(paper);
        break;
      case 2:
        setEnemy(scissors);
        break;
      default:
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <h1 className={style.title}>RockPaperScissors</h1>
        <div className={style.score}>
          <div className={style.scoreX}>You: </div>
          <div className={style.scoreO}>Oponent: </div>
        </div>
      </div>
      <div className={style.game}>
        <div className={style.playerOne}>
          <div className={style.choosenItem}>
            {chosen ? (
              <img className={style.choosenImg} src={chosen} alt="rock" />
            ) : (
              "?"
            )}
          </div>
          <div className={style.options}>
            <div
              className={style.option}
              onClick={() => {
                game();
                setChosen(rock);
              }}
            >
              <img className={style.optionImg} src={rock} alt="rock" />
            </div>
            <div
              className={style.option}
              onClick={() => {
                game();
                setChosen(paper);
              }}
            >
              <img className={style.optionImg} src={paper} alt="paper" />
            </div>
            <div
              className={style.option}
              onClick={() => {
                game();
                setChosen(scissors);
              }}
            >
              <img className={style.optionImg} src={scissors} alt="scissors" />
            </div>
          </div>
        </div>
        <div className={style.playerTwo}>
          <div className={style.choosenItem}>
            {enemy ? (
              <img className={style.choosenImg} src={enemy} alt="rock" />
            ) : (
              "?"
            )}
          </div>
        </div>
      </div>
      <div className={style.control}>
        <button className={style.button} onClick={() => {}}>
          Restart
        </button>
        <button className={style.button} onClick={() => {}}>
          Reset score
        </button>
      </div>
      {/* {<div className={style.notification}>{"player"}</div>} */}
    </div>
  );
}

export default RockPaperScissors;
