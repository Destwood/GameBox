import "./App.scss";
import React, { useState } from "react";

// import box from "./assets/svg.svg";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import RockPaperScissors from "./components/RockPaperScissors/RockPaperScissors";

import Interface from "./components/Interface/Interface";
import Cursor from "./components/Cursor/Cursor";

function App() {
  const [game, setGame] = useState();
  return (
    <div className="App">
      {/* <img className="img" src={box} alt=""></img> */}
      {/* <TicTacToe /> */}
      {!game && (
        <>
          <button
            onClick={() => {
              setGame(1);
            }}
          >
            TicTacToe
          </button>
          <button
            onClick={() => {
              setGame(2);
            }}
          >
            Rock Paper Scissors
          </button>
        </>
      )}

      {game === 1 && <TicTacToe />}
      {game === 2 && <RockPaperScissors />}

      {/* <Interface /> */}
      <Cursor />
    </div>
  );
}

export default App;
