import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotheruser = "coding from anotheruser";
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  anotheruser
);

const anotherElement = (
  <a href="https://google.com" target="_blank" rel="noreferrer">
    google
  </a>
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
