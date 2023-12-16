
import { Loading } from "../loading/component";
import { useGetRestaurantDishesQuery } from "../../redux_store/features/services/api";
import { Dish } from "./dish/component"

import styles from './styles.module.css'


export const RestaurantMenu = ( { menuIds, restaurantId }) => {
  const {data, isFetching, isLoaded} = useGetRestaurantDishesQuery(restaurantId)

  
  if (isFetching ) {
  return <Loading />
  }

return <div className={styles.menu}> 
  <h3>Меню: </h3>
  <ul className={styles.menuDishes}> 
      {data.map((dish) =>  <Dish dish={dish}/> )}
  </ul>
</div>
}