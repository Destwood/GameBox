import React, { useState, useEffect } from "react";
import style from "./Snake.module.scss";

function Snake() {
  const [score, setScore] = useState(0);
  const [food, setFood] = useState({ x: 0, y: 0 });
  const [snake, setSnake] = useState({ x: 10, y: 10 });
  const [direction, setDirection] = useState("ArrowRight");
  const [snakeBody, setSnakeBody] = useState([snake]);

  let highScore = localStorage.getItem("GameBox_Snake_HighScore") || 0;

  const updateFoodPosition = () => {
    const newFoodPosition = {
      x: Math.floor(Math.random() * 15) + 1,
      y: Math.floor(Math.random() * 15) + 1,
    };
    setFood(newFoodPosition);
  };

  const updateScores = () => {
    console.log("updateScore");
    setScore(score + 1);
    score > highScore
      ? localStorage.setItem("GameBox_Snake_HighScore", score)
      : setScore(score + 1);
  };

  const changeDirection = (newDirection) => {
    if (
      (direction === "ArrowLeft" && newDirection !== "ArrowRight") ||
      (direction === "ArrowRight" && newDirection !== "ArrowLeft") ||
      (direction === "ArrowUp" && newDirection !== "ArrowDown") ||
      (direction === "ArrowDown" && newDirection !== "ArrowUp")
    ) {
      setDirection(newDirection);
    }
  };

  const handleColision = () => {
    console.log(snake.x <= 0 || snake.x > 30 || snake.y <= 0 || snake.y > 30);
  };

  // game updating func
  const updateGame = () => {
    let newSnakeBody = [...snakeBody];
    if (snake.x === food.x && snake.y === food.y) {
      updateFoodPosition();
      newSnakeBody = [...newSnakeBody, { x: food.x, y: food.y }];

      updateScores();
    }
    switch (direction) {
      case "ArrowRight":
        setSnake({ ...snake, x: snake.x + 1 });
        break;
      case "ArrowUp":
        setSnake({ ...snake, y: snake.y - 1 });
        break;
      case "ArrowLeft":
        setSnake({ ...snake, x: snake.x - 1 });
        break;
      case "ArrowDown":
        setSnake({ ...snake, y: snake.y + 1 });
        break;
      default:
        break;
    }
    for (let i = newSnakeBody.length - 1; i > 0; i--) {
      newSnakeBody[i] = snakeBody[i - 1];
    }
    newSnakeBody[0] = snake;

    if (snake.x <= 0 || snake.x > 30 || snake.y <= 0 || snake.y > 30) {
      setScore(0);
      setSnake({ x: 5, y: 5 });
      updateFoodPosition();
      setSnakeBody([snake]);
    } else {
      setSnakeBody(newSnakeBody);
    }
  };

  // first render food position update
  useEffect(() => {
    updateFoodPosition();
  }, []);

  // update game each .2 second
  useEffect(() => {
    const handleKeyPress = (e) => {
      changeDirection(e.key);
    };
    document.addEventListener("keydown", handleKeyPress);

    const updateIntervalId = setInterval(updateGame, 200);

    return () => {
      clearInterval(updateIntervalId);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [snake, snakeBody, score]);
  return (
    <div className={style.container}>
      <div className={style.details}>
        <span>Score: {score}</span>
        <span>High score: {highScore}</span>
      </div>

      <div className={style.board}>
        <div
          className={style.food}
          style={{ gridArea: `${food.y} / ${food.x}` }}
        ></div>
        {snakeBody.map(
          (item, index) => (
            console.log(snakeBody),
            (
              <div
                key={index}
                className={style.head}
                style={{ gridArea: `${item.y} / ${item.x}` }}
              ></div>
            )
          )
        )}
      </div>

      <div className={style.control}>
        <div className="">
          <button
            className={style.sideButton}
            onClick={() => {
              changeDirection("ArrowLeft");
            }}
          >
            ←
          </button>
        </div>
        <div className="">
          <button
            onClick={() => {
              changeDirection("ArrowUp");
            }}
          >
            ↑
          </button>
          <button
            onClick={() => {
              changeDirection("ArrowDown");
            }}
          >
            ↓
          </button>
        </div>
        <div className="">
          <button
            className={style.sideButton}
            onClick={() => {
              changeDirection("ArrowRight");
            }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Snake;
