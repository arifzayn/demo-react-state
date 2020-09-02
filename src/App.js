import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isLit, setLit] = useState(true);
  let [temp, setTemp] = useState(22);
  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      This room is <span>{isLit ? "lit" : "dark"}</span>
      <br />
      Room Temperature: <span>{temp}°C</span>
      <br />
      <button onClick={() => setLit(!isLit)}>Flip</button>
      <button onClick={() => setLit(true)}>ON</button>
      <button onClick={() => setLit(false)}>OFF</button>
      <button onClick={() => setTemp(++temp)}>+</button>
      <button onClick={() => setTemp(--temp)}>-</button>
    </div>
  );
}

export default App;
