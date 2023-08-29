import "./App.scss";
// import box from "./assets/svg.svg";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import RockPaperScissors from "./components/RockPaperScissors/RockPaperScissors";

import Interface from "./components/Interface/Interface";
import Cursor from "./components/Cursor/Cursor";

function App() {
  return (
    <div className="App">
      {/* <img className="img" src={box} alt=""></img> */}
      {/* <TicTacToe /> */}

      <RockPaperScissors />

      {/* <Interface /> */}
      <Cursor />
    </div>
  );
}

export default App;
