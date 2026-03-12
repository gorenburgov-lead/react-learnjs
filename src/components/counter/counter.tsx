import { useState } from "react";
import "./counter.css"

export const Counter = ({ maxCount }: { maxCount: number }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => setCount((count) => (count > 0 ? --count : count))}
      >
        -
      </button>
      <span className="count">{count}</span>
      <button
        onClick={() =>
          setCount((count) => (count < maxCount ? ++count : count))
        }
      >
        +
      </button>
    </div>
  );
};
