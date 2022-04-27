import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // const increase = () => {
  //   setCounter((Counter = Counter + 1));
  // };

  // const decrease = () => {
  //   setCounter((Counter = Counter - 1));
  // };

  // const reset = () => {
  //   setCounter(0);
  // };

  return (
    <div>
      <span className="output">{counter}</span>
      <button classeName="button" onClick={setCounter(counter - 1)}>
        -
      </button>
      <button className="button" onClick={setCounter(counter + 1)}>
        +
      </button>
      <button className="button_reset" onClick={setCounter(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;
