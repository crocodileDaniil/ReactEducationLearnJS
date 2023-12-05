import styles from "./styles.module.css";

import classNames from "classnames";

import { useTheme } from "../thems/hooks";

export const Button = ({ name, onClick }) => {
  const { theme } = useTheme ()
  // console.log("value of name", theme);

  return (
    <button onClick={onClick} className={classNames(styles["button-default"], 
    {[styles["button-default_white"]]: theme.whiteThemeButton === true && theme.whiteThemeAll === true},
    {[styles["button-default_dark"]]: theme.whiteThemeButton === false || theme.whiteThemeAll === false},
    )}>
     
      {name}
    </button>
  );
};
