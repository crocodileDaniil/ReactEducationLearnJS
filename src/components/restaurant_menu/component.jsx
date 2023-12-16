import { useDispatch } from "react-redux";
import { Dish } from "./dish/component"

import styles from './styles.module.css'
import { useEffect } from "react";
import { getDishes } from "../../redux_store/features/entities/dishe/thunks/get_dishes";
import { useSelector } from "react-redux";
import { selecDishestStatus } from "../../redux_store/features/entities/dishe/selectors";
import { Loading } from "../loading/component";

export const RestaurantMenu = ( { menuIds, restId }) => {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getDishes(restId));
  }, [restId]);
  
  const status = useSelector( store => selecDishestStatus(store) )
  
  if (status !== 'fullfield') {
  return <Loading />
  }

return <div className={styles.menu}> 
  <h3>Меню: </h3>
  <ul className={styles.menuDishes}> 
      {menuIds.map((dishId) =>  <Dish dishId={dishId}/> )}
  </ul>
</div>
}