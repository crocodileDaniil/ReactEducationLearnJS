import { useState } from "react";
import { FilterFoods } from "../../components/filter_menu/component";
import { Restaurants } from "../../components/restaurants/component";
import styles from "./styles.module.css";
import { Layout } from "../../components/layout/component";

export const RestaurantsPage = () => {
  const [filter, setFilter] = useState("");

  // const restaurants = useSelector( store => selectRestaurantModule(store).entities)

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
          <Restaurants className={styles.container}  filterIds={filter} />
        </div>
      </div>
    </Layout>
  );
};
