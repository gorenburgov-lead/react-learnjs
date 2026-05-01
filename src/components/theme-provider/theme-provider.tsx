import { useState, type ReactNode } from "react";
import { Theme, ThemeContext } from ".";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>(Theme.DEFAULT);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
