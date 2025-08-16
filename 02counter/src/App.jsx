import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 15

  const addValue = function () {
    if (counter !== 20) {
      counter = counter + 1;
      setCounter(counter);
    }
  };

  const removeValue = () => {
    if(counter !== 0){
    counter = counter - 1;
    setCounter(counter);
    }
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <footer>footer: {counter}</footer>
    </>
  );
}

export default App;
