import classNames from "classnames"
import { Restaurant } from "../restaurant/component"

import styles from './styles.module.css'

export const Restaurants = ( { restaurantsIds,className }) => {
  // console.log('value of window', mock)
return <div className={classNames(className, styles.restaurants)} 
> 

  {restaurantsIds.map((id) => <Restaurant id={id}/>
  
  
  )}
</div>
}