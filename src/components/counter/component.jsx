import classNames from "classnames";
import styles from "./styles.module.css";

export const Counter = ({ onValueDown, count, onValueUp,type }) => {
  return (
    <div className={styles.counter}>
      <button
        className={classNames(styles.button, {
          [styles["button-menu"]]: type === "button-menu",
        },{
          [styles["button-review"]]: type === "button-review",
        })}
        onClick={onValueUp}
      >
        +
      </button>

      <span className={styles.count}> {count} </span>

      <button
         className={classNames(styles.button, {
          [styles["button-menu"]]: type === "button-menu",
        }, {
          [styles["button-review"]]: type === "button-review",
        })}
        onClick={onValueDown}
      >
        -
      </button>
    </div>
  );
};
