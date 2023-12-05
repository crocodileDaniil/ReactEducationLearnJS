import { useState } from "react";
import { FilterFoods } from "../../components/filter_menu/component";
import { Restaurants } from "../../components/restaurants/component";
import styles from "./styles.module.css";
import { Layout } from "../../components/layout/component";
import { useSelector } from "react-redux";
import { selectRestaurantsFilteredById } from "../../redux_store/features/entities/restaurant/selectors";

export const RestaurantsPage = () => {
  const [filter, setFilter] = useState("");

  // const restaurants = useSelector( store => selectRestaurantModule(store).entities)

  const restaurantsIds = useSelector( store => selectRestaurantsFilteredById(store,filter ) )


  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.wpapper}>
          <FilterFoods
            className={styles.container}
            // filters={filters}


            onFilterClick={(newFilter) => {
              setFilter(newFilter);
            }}
          />
        </div>
        <div className={styles.wpapper}>
          <Restaurants className={styles.container} restaurantsIds={restaurantsIds} />
        </div>
      </div>
    </Layout>
  );
};
