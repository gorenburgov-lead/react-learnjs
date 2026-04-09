import React, { useContext } from "react";
import { Theme, ThemeContext } from "../theme-provider";
import styles from "./theme-button.module.css";

export const ThemeButton: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeButton must be used within ThemeProvider");
  }
  const { theme, setTheme } = context;

  const toggleTheme = () => {
    setTheme(theme === Theme.DEFAULT ? Theme.ALT : Theme.DEFAULT);
  };

  return (
    <button
      onClick={toggleTheme}
      className={theme === Theme.DEFAULT ? styles.default : styles.alt}
      aria-label="Toggle theme"
    >
      {theme === Theme.DEFAULT ? "☀️" : "🌙"}
    </button>
  );
};
