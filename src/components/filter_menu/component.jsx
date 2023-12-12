import { FilterButton } from "../filter_button/component"
import styles from "./styles.module.css"
import {onActive} from './index.js'
import classNames from "classnames"
import { useSelector } from "react-redux"
import { selectRestaurantIds } from "../../redux_store/features/entities/restaurant/selectors.js"


export const FilterFoods = ( {onFilterClick, className } ) => {


  const filtersIds = useSelector( (state) => selectRestaurantIds(state)).concat(["reset", 'All'])

return <div className={classNames(styles.filterMenu,className)}  onClick={onActive}> 
  {filtersIds.map((restaurantId) => <FilterButton id={restaurantId} onClickFilter={() => onFilterClick(restaurantId)} />)}
</div>
}