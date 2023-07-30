import { createContext, useState } from "react";
import { isActiveDarkMode } from "../services/DarkModeService";

export const DarkModeContext = createContext(null);

export function DarkModeContainer({ children, ...props }) {
  const [darkMode, setDarkMode] = useState(isActiveDarkMode());

  if (darkMode) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
