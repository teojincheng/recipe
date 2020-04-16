import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, inputText } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const inputValue = useSelector((state) => state.inputValue);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <span>Counter {counter}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
