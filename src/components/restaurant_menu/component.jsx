import { Dish } from "./dish/component"

import styles from './styles.module.css'

export const RestaurantMenu = ( { menu }) => {
  // console.log('value of menu', menu)
return <div className={styles.menu}> 
  <h3>Меню: </h3>
  <ul className={styles.menuDishes}> 
      {menu.map((elem) =>  <Dish data={elem}/> )}
  </ul>
</div>
}