import "./styles.css";
import { useState } from "react";

export default function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [show, setShow] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hi");
    //setData();
    setShow(true);
  };
  return (
    <div className="App">
    <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
    
        <label>
          First Name:
          <input
            type="text"
            required
            onChange={(e) => setFirst(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            required
            onChange={(e) => setLast(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {show ? (
        <div>
          Full Name:{" "}
          <span>
            {first} {last}
          </span>
        </div>
      ) : (
    ""
      )}
    </div>
  );
}
