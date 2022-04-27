import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <header>
        <h1>React Counter</h1>
      </header>
      <div className="container">
        <span className="output">{counter}</span>
        <button
          classeName="button"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <button
          className="button"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
        <button
          className="button_reset"
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
