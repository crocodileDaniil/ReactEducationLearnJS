import { FilterButton } from "../filter_button/component"
import styles from "./styles.module.css"
import {onActive} from './index.js'
import classNames from "classnames"
import { useSelector } from "react-redux"
import { selectRestaurantIds } from "../../redux_store/features/entities/restaurant/selectors.js"
import { useGetRestaurantsQuery } from "../../redux_store/features/services/api"



export const FilterFoods = ( {onFilterClick, className } ) => {

  const { data, isFetching, isLoading } = useGetRestaurantsQuery(undefined);

  const filtersIds = data.map((elem) => elem.id).concat(["reset", 'All']);
  if (!isFetching) {
return <div className={classNames(styles.filterMenu,className)}  onClick={onActive}> 
  {filtersIds.map((restaurantId) => <FilterButton id={restaurantId} onClickFilter={() => onFilterClick(restaurantId)} />)}
</div>
  }
}