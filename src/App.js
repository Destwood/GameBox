import "./App.scss";
import box from "./assets/svg.svg";

import Cursor from "./components/cursor/Cursor";

function App() {
  return (
    <div className="App">
      <Cursor />
      <img className="img" src={box} alt=""></img>
    </div>
  );
}

export default App;
