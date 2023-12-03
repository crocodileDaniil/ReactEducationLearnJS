import classNames from "classnames";
import styles from "./styles.module.css";
import { useTheme } from "../thems/hooks";

export const Counter = ({ onValueDown, count, onValueUp,type }) => {
  const {theme} = useTheme()
  return (
    <div className={styles.counter}>
      <button
        className={classNames(styles.button, {
          [styles["button-menu"]]: type === "button-menu",
          [styles["button-menu_dark"]]: theme.whiteThemeButton === false || theme.whiteThemeAll === false,
        },{
          [styles["button-review"]]: type === "button-review",
          [styles["button-review_dark"]]: type === "button-review" && (theme.whiteThemeButton === false || theme.whiteThemeAll === false),
          
        })}
        onClick={onValueUp}
      >
        +
      </button>

      <span className={styles.count}> {count} </span>

      <button
         className={classNames(styles.button, {
          [styles["button-menu"]]: type === "button-menu",
          [styles["button-menu_dark"]]: theme.whiteThemeButton === false || theme.whiteThemeAll === false
        }, {
          [styles["button-review"]]: type === "button-review",
          [styles["button-review_dark"]]:  type === "button-review" && (theme.whiteThemeButton === false || theme.whiteThemeAll === false),
        })}
        onClick={onValueDown}
      >
        -
      </button>
    </div>
  );
};
