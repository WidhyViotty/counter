import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>React Counter</h1>
      </header>
      <div className="container">
        <button
          classeName="button"
          disabled={counter <= 0 && true}
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <span className="output">{counter}</span>
        <button
          className="button"
          disabled={counter >= 10 && true}
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="button_reset"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
      <footer>Made by Widhy @LeReacteur</footer>
    </div>
  );
}

export default App;
