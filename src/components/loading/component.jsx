import classNames from "classnames"
import styles from "./styles.module.css"

export const Loading = ( { className,}) => {
return <div className={classNames(className, styles.loading )}> Process downlod </div>
}