import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  const inc = () => {
    setValue((prev) => prev + 1);
  };
  const dec = () => {
    setValue((prev) => prev - 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <p>
        Count: <span>{value}</span>
      </p>
      <div>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
      </div>
    </div>
  );
}
