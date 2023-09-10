import "./App.scss";
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";

// import box from "./assets/svg.svg";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import RockPaperScissors from "./components/RockPaperScissors/RockPaperScissors";

import GameList from "./components/GameList/GameList";
import Interface from "./components/Interface/Interface";
import Cursor from "./components/Cursor/Cursor";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Interface />
        <Cursor />
        {/* <img className="img" src={box} alt=""></img> */}
        {/* <TicTacToe /> */}

        <GameList>
          <TicTacToe />
          <RockPaperScissors />
        </GameList>
      </Provider>
    </div>
  );
}

export default App;
