import { createContext } from "react";

export const Theme = {
  DEFAULT: "default",
  ALT: "alt",
} as const;

export const ThemeContext = createContext<{
  theme: string;
  setTheme: (theme: string) => void;
} | null>(null);
