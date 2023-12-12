import classNames from "classnames";
import { ThemsManager } from "../thems_manager/component";
import styles from "./styles.module.css";
import { Button } from "../button/component";

export const Header = ({ className }) => {
  return (
    <header className={styles.root}>
      <div className={classNames(className, styles.header)}>
        <h2>best food</h2>
        <Button name={"homeWork 7"} />
        <ThemsManager />
      </div>
    </header>
  );
};
