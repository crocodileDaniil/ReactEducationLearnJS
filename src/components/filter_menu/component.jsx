import { FilterButton } from "../filter_button/component"
import styles from "./styles.module.css"
import {onActive} from './index.js'
import classNames from "classnames"


export const FilterFoods = ( { filters, onFilterClick, className } ) => {
  // console.log('value of filterMenu', filterArray)

return <div className={classNames(styles.filterMenu,className)}  onClick={onActive}> 
  {filters.map((name) => <FilterButton name={name} onClickFilter={() => onFilterClick(name)} />)}
</div>
}