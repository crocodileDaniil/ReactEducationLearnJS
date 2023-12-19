
import { Loading } from "../loading/component";
import { useGetRestaurantDishesQuery } from "../../redux_store/features/services/api";
import { Dish } from "./dish/component"

import styles from './styles.module.css'


export const RestaurantMenu = ( { menuIds, restaurantId }) => {
  const {data: menu, isFetching, isLoaded} = useGetRestaurantDishesQuery(restaurantId)
  console.log('menu', menu)
  
  if (isFetching ) {
  return <Loading />
  }

return <div className={styles.menu}> 
  <h3>Меню: </h3>
  <ul className={styles.menuDishes}> 
      {menu.map((dish) =>  <Dish dish={dish}/> )}
  </ul>
</div>
}