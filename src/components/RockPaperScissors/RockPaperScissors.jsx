import React, { useState, useEffect } from "react";
import style from "./RockPaperScissors.module.scss";

import rock from "./rock.svg";
import paper from "./paper.svg";
import scissors from "./scissors.svg";

function RockPaperScissors() {
  const [showNotification, setShowNotification] = useState(false);
  const [scores, setScores] = useState({ player: 0, enemy: 0 });
  const [player, setPlayer] = useState();
  const [enemy, setEnemy] = useState();
  const [winner, setWinner] = useState();
  const [final, setFinal] = useState(false);
  const [gameInProgress, setGameInProgress] = useState(false);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const notification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 1000);
  };

  useEffect(() => {
    if (final) {
      if (player === enemy) {
        setWinner("tie");
        notification();
      } else if (
        (player === rock && enemy === scissors) ||
        (player === paper && enemy === rock) ||
        (player === scissors && enemy === paper)
      ) {
        setWinner("you won!");
        setScores({ ...scores, player: scores.player + 1 });
        notification();
      } else {
        setWinner("enemy won :(");
        setScores({ ...scores, enemy: scores.enemy + 1 });
        notification();
      }
    }
  }, [player, enemy, final]);

  const game = async (item) => {
    setGameInProgress(true);
    setFinal(false);
    setPlayer(item);
    const option = Math.floor(Math.random() * 3);

    for (let j = 1; j <= 5; j++) {
      for (let i = 1; i <= 3; i++) {
        await sleep((j + i) * 20);
        switch (i) {
          case 1:
            setEnemy(rock);
            break;
          case 2:
            setEnemy(paper);
            break;
          case 3:
            setEnemy(scissors);
            break;
          default:
        }
      }
    }

    await sleep(400);
    setFinal(true);
    switch (option) {
      case 0:
        setEnemy(rock);
        break;
      case 1:
        setEnemy(paper);
        break;
      case 2:
        setEnemy(scissors);
        break;
      default:
    }

    setGameInProgress(false);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <h1 className={style.title}>RockPaperScissors</h1>
        <div className={style.score}>
          <div className={style.scoreX}>You: {scores.player}</div>
          <div className={style.scoreO}>Opponent: {scores.enemy}</div>
        </div>
      </div>
      <div className={style.game}>
        <div className={style.playerOne}>
          <div className={style.choosenItem}>
            {player ? (
              <img className={style.choosenImg} src={player} alt="rock" />
            ) : (
              "?"
            )}
          </div>
          <div className={style.options}>
            <div
              className={style.option}
              onClick={() => {
                if (!gameInProgress) {
                  game(rock);
                }
              }}
            >
              <img className={style.optionImg} src={rock} alt="rock" />
            </div>
            <div
              className={style.option}
              onClick={() => {
                if (!gameInProgress) {
                  game(paper);
                }
              }}
            >
              <img className={style.optionImg} src={paper} alt="paper" />
            </div>
            <div
              className={style.option}
              onClick={() => {
                if (!gameInProgress) {
                  game(scissors);
                }
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
        <button
          className={style.button}
          onClick={() => {
            setScores({ player: 0, enemy: 0 });
          }}
        >
          Reset score
        </button>
      </div>
      {showNotification && <div className={style.notification}>{winner}</div>}
    </div>
  );
}

export default RockPaperScissors;
