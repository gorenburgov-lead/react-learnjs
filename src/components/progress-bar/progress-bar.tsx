import styles from "./progress-bar.module.css";
export const ProgressBar = ({ progress = 0 }) => {
  console.log(styles);
  return (
    <div
      className={styles["progress-bar"]}
      style={{ width: `${progress}%` }}
    ></div>
  );
};
