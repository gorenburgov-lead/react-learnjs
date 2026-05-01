import { useContext } from "react";
import { Theme, ThemeContext } from "../theme-provider";
import styles from "./tab.module.css";
import classNames from "classnames";
interface Props {
  name: string;
  onClick: () => void;
  disabled?: boolean;
}
export const Tab = ({ name, onClick, disabled = false }: Props) => {
  const handleTab = () => !disabled && onClick();
  const themeContext = useContext(ThemeContext);
  return (
    <button
      className={classNames({
        [styles.tab]: true,
        [styles.disabled]: disabled,
        [styles.default]: themeContext?.theme === Theme.DEFAULT,
        [styles.alt]: themeContext?.theme === Theme.ALT,
      })}
      onClick={handleTab}
    >
      {name}
    </button>
  );
};
