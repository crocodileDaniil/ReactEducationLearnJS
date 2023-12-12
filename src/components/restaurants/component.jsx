import classNames from "classnames"
import { Restaurant } from "../restaurant/component"

import styles from './styles.module.css'
import { selectRestaurantsFilteredById } from "../../redux_store/features/entities/restaurant/selectors"
import { useSelector } from "react-redux"

export const Restaurants = ( { filterIds,className }) => {
  // console.log('value of window', mock)

  const restaurantsIds = useSelector( store => selectRestaurantsFilteredById(store,filterIds ) )
return <div className={classNames(className, styles.restaurants)} 
> 
  {restaurantsIds.map((id) => <Restaurant id={id}/>
  
  )}
</div>
}