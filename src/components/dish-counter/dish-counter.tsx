import { useState } from "react";
import { Counter } from "../counter/counter";

export const DishCounter = ({ maxCount }: { maxCount: number }) => {
  const [count, setCount] = useState(0);
  const handleDecrement = () =>
    setCount((count) => (count > 0 ? --count : count));
  const handleIncrement = () =>
    setCount((count) => (count < maxCount ? ++count : count));
  return (
    <Counter
      decrement={handleDecrement}
      increment={handleIncrement}
      count={count}
    />
  );
};
