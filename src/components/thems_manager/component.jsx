import classNames from "classnames";
import { Button } from "../button/component";
import styles from "./styles.module.css";
import { useTheme } from "../thems/hooks";



export const ThemsManager = ({ className }) => {
  // const all = useContext(ThemeContext);
  const {theme, setThemeButton, setThemeAll} = useTheme();
  // console.log('button Manager', all)

  return (
    <div className={classNames(styles.manager, className)}>
      <Button name={"BUTTON them"} 
      onClick={ () => setThemeButton(theme)} 
      />
      <Button name={"PAGE them (в активной разработке)"} 
      onClick={() => setThemeAll(theme)} 
      />
    </div>
  );
};
