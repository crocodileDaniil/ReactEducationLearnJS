
import classNames from "classnames";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

import styles from "./styles.module.css";

import { ThemeProvider } from "../thems/component";



export const Layout = ({ children }) => {
 

  return (
    <ThemeProvider >
      <div className={classNames(styles.layout)}>
        <Header className={styles.container}/>
        <main>{children}</main>
        <Footer className={styles.container}/>
      </div>
      </ThemeProvider>
  );
};
