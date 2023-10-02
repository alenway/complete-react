import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>coding hello</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      <p>footer</p>
    </>
  );
}

export default App;
