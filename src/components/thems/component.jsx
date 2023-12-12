import { useCallback } from "react";
import { useState } from "react";
import { ThemeContext } from "./context";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    whiteThemeButton: true,
    whiteThemeAll: true,
  });
  const setThemeButton = useCallback(
    (state) =>
      setTheme({ ...state, whiteThemeButton: !state.whiteThemeButton }),
    []
  );

  const setThemeAll = useCallback(
    (state) => setTheme({ ...state, whiteThemeAll: !state.whiteThemeAll }),
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, setThemeButton, setThemeAll }}>
      {children}
    </ThemeContext.Provider>
  );
};
