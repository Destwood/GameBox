import "./App.scss";
// import box from "./assets/svg.svg";
import TicTacToe from "./components/TicTacToe/TicTacToe";

import Cursor from "./components/Cursor/Cursor";

function App() {
  return (
    <div className="App">
      <Cursor />
      <TicTacToe />
      {/* <img className="img" src={box} alt=""></img> */}
    </div>
  );
}

export default App;
