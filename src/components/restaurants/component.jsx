import classNames from "classnames"
import { Restaurant } from "../restaurant/component"

import styles from './styles.module.css'

export const Restaurants = ( { dataFoods,className }) => {
  // console.log('value of window', mock)
return <div className={classNames(className, styles.restaurants)} 
> 

  {dataFoods.map((elem) => <Restaurant data={elem}/>)}
</div>
}