import styles from "./counter.module.css";
interface Props {
  decrement: () => void;
  increment: () => void;
  count: number;
}

export const Counter = ({ decrement, increment, count }: Props) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span className={styles.count}>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
