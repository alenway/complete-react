import { useState } from "react";
const HelloWorld = () => {
  const [number, setNumber] = useState(0);
  const alpha = "abcdefghijklmnopqrstuvwxyz ";
  const word = "hello world";
  let nerro = "";

  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i].toLowerCase();
    if (alpha.includes(currentChar)) {
      nerro += currentChar;
    }
  }


  return (
    <>
      <div>{nerro}</div>
      <button onClick={() => setNumber(number + 1)}>button for add</button>
      <br />
      <label htmlFor="name">Name:{number}</label>
    </>
  );
};

export default HelloWorld;
