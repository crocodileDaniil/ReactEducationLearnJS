import classNames from "classnames"
import { Restaurant } from "../restaurant/component"
import styles from './styles.module.css'

import { Loading } from "../loading/component"
import { useGetRestaurantsQuery } from "../../redux_store/features/services/api"
import { useParams } from "react-router-dom"


export const Restaurants = ( { filterId,className }) => {

  const { restaurantId } = useParams()
 
  const {data, isFetching, isLoading} = useGetRestaurantsQuery();
  // console.log("data", data);
  const filterRestaurants = data?.filter(
    (restaurant) => restaurant.id === restaurantId || restaurantId === "All"
  );

  if (isLoading ) {
    return <Loading />;
  }

return <div className={classNames(className, styles.restaurants)} 
> 
  {filterRestaurants.map((data) => <Restaurant data={data}/>
  
  )}
</div>
}