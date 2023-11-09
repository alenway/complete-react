import { useState } from "react";
const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>use state hook</h1>
      <p>The useState Hook is used to manage state in functional components.</p>
      <button id="button"
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px",
        }}
        onClick={increment}
      >
        {count}
      </button>
    </div>
  );
};

export default UseStateHook;
