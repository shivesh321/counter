import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter < 20 ? counter + 1 : counter);
  };

  const removeValue = () => {
    setCounter(counter > 0 ? counter - 1 : counter);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default App;
