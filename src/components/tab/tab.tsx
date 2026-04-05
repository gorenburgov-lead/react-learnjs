import styles from "./tab.module.css";
import classNames from "classnames";
interface Props {
  name: string;
  onClick: () => void;
  disabled?: boolean;
}
export const Tab = ({ name, onClick, disabled = false }: Props) => {
  const handleTab = () => !disabled && onClick();
  return (
    <button
      className={classNames({
        [styles.tab]: true,
        [styles.disabled]: disabled,
      })}
      onClick={handleTab}
    >
      {name}
    </button>
  );
};
