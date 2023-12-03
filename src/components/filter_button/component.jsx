import { useTheme } from '../thems/hooks'
import styles from './styles.module.css'
import classNames from 'classnames'

export const FilterButton = ( { name, onClickFilter }) => {
  const {theme} = useTheme()

  return <button onClick={onClickFilter} className={classNames(styles.button,
  {[styles.button_white]: theme.whiteThemeButton === true && theme.whiteThemeAll === true},
  {[styles.button_dark]: theme.whiteThemeButton === false || theme.whiteThemeAll === false},
  )}>
   restaurant: {name}
  </button>
}
