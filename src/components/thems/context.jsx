import React from "react";

/**
 * базовые значения, чтобы если что-то не прокинули, сайт не сломался
 */
export const ThemeContext = React.createContext(
  {
  theme: { whiteThemeButton: true, whiteThemeAll: true },
}
);
