import React, { useState, useEffect } from "react";
import style from "./Snake.module.scss";

function Snake() {
  const [score, setScore] = useState(0);
  const [food, setFood] = useState({ x: 0, y: 0 });
  const [snake, setSnake] = useState({ x: 1, y: 1 });
  const [direction, setDirection] = useState("ArrowRight");
  const [snakeBody, setSnakeBody] = useState([snake]);

  let highScore = localStorage.getItem("GameBox_Snake_HighScore") || 0;

  const updateFoodPosition = () => {
    const newFoodPosition = {
      x: Math.floor(Math.random() * 30) + 1,
      y: Math.floor(Math.random() * 30) + 1,
    };
    setFood(newFoodPosition);
  };
  const updateScores = () => {
    score > highScore
      ? localStorage.setItem("GameBox_Snake_HighScore", score)
      : setScore(score + 1);
  };

  const changeDirection = (dir) => {
    setDirection(dir);
  };

  const handleColision = () => {
    if (snake.x <= 0 || snake.x > 30 || snake.y <= 0 || snake.y > 30) {
      setScore(0);
      setSnake({ x: 5, y: 5 });
    }
  };

  const updateGame = () => {
    if (snake.x === food.x && snake.y === food.y) {
      updateFoodPosition();
      snakeBody.push([food.x, food.y]);
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

    handleColision();
  };
  useEffect(() => {
    updateFoodPosition();
  }, []);
  useEffect(() => {
    const handleKeyPress = (e) => {
      changeDirection(e.key);
    };
    document.addEventListener("keyup", handleKeyPress);

    const updateIntervalId = setInterval(updateGame, 500);

    return () => {
      clearInterval(updateIntervalId);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [snakeBody, direction]);
  return (
    <div className={style.container}>
      <div className={style.details}>
        <span>Score: {score}</span>
        <span>High score: {highScore}</span>
      </div>

      <div className={style.board}>
        <div
          className={style.food}
          style={{ gridArea: `${food.x} / ${food.y}` }}
        ></div>

        {snakeBody.map((element) => {
          <div
            class={style.head}
            style={{ gridArea: `${snake.y} / ${snake.x}` }}
          ></div>;
        })}
      </div>

      <div className={style.control}>
        <button
          onClick={() => {
            changeDirection("ArrowLeft");
          }}
        >
          ←
        </button>
        <button
          onClick={() => {
            changeDirection("ArrowUp");
          }}
        >
          ↑
        </button>
        <button
          onClick={() => {
            changeDirection("ArrowRight");
          }}
        >
          →
        </button>
        <button
          onClick={() => {
            changeDirection("ArrowDown");
          }}
        >
          ↓
        </button>
      </div>
    </div>
  );
}

export default Snake;
