import { Dish } from "./dish/component"

import styles from './styles.module.css'

export const RestaurantMenu = ( { menuIds }) => {
  // console.log('value of menu', menu)

  // console.log('Menu Ids', menuIds)
return <div className={styles.menu}> 
  <h3>Меню: </h3>
  <ul className={styles.menuDishes}> 
      {menuIds.map((dishId) =>  <Dish dishId={dishId}/> )}
  </ul>
</div>
}