import { useContext } from "react";
import { ThemeContext } from "./context";

export function useTheme() {
  // console.log(useContext(ThemeContext))
  return useContext(ThemeContext)
}