import { useState } from "react";
import "./componentCounter.css";
function ComponentCounter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div>
      <p>Count 1: {count1}</p>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Add 1
      </button>
      <p>Count 2: {count2}</p>
      <button
        onClick={() => {
          setCount2(count2 + 2);
        }}
      >
        Add 2
      </button>
    </div>
  );
}

export default ComponentCounter;
