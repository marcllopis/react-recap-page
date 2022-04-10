import React, { useState } from "react";

const ClickEvents = () => {
  let [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);

  return (
    <div className="centered-content">
      <h1>A counter that shows the use of state and click events</h1>
      <p>
        Counter value: <b>{counter}</b>
      </p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default ClickEvents;
