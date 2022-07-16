import React, { useState } from "react";

function Button1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>button 1 (add 1)</div>
      <div> count ={count}</div>
      <button onClick={() => setCount(count + 1)}> Add </button>
    </div>
  );
}

function Button2() {
  const [count, setCount] = useState(0);
  const [numberImput, setNumberInput] = useState(5);
  return (
    <div>
      <div>button 2 (add from input text)</div>
      <div>count = {count}</div>
      <input
        value={numberImput}
        onChange={(event) => setNumberInput(event.target.value)}
      />
      <p>{numberImput}</p>
      <button onClick={() => setCount(count + Number(numberImput))}>
        add amount from input
      </button>
    </div>
  );
}

function Button3() {
  return (
    <div>
      <p>button 3</p>
    </div>
  );
}

function Button4() {
  return (
    <div>
      <p>button 4</p>
    </div>
  );
}

export default Button1;

export { Button2, Button3, Button4 };
