import React from "react";
import style from "./RockPaperScissors.module.scss";

import rock from "./rock.svg";
import paper from "./paper.svg";
import scissors from "./scissors.svg";

function RockPaperScissors() {
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
          <div className={style.choosenItem}>?</div>
          <div className={style.options}>
            <div className={style.option}>
              <img className={style.optionImg} src={rock} alt="rock" />
            </div>
            <div className={style.option}>
              <img className={style.optionImg} src={paper} alt="paper" />
            </div>
            <div className={style.option}>
              <img className={style.optionImg} src={scissors} alt="scissors" />
            </div>
          </div>
        </div>
        <div className={style.playerTwo}>
          <div className={style.choosenItem}>?</div>
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
