import { useState } from "react";
import { FilterFoods } from "../../components/filter_menu/component";
import { Restaurants } from "../../components/restaurants/component";
import { Layout } from "../../components/layout/component";
import { Loading } from "../../components/loading/component";
import { useGetRestaurantsQuery } from "../../redux_store/features/services/api";

import styles from "./styles.module.css";

export const RestaurantsPage = () => {
  const [filter, setFilter] = useState("");

  const {data, isFetching, isLoading} = useGetRestaurantsQuery(undefined)
  // console.log(status);

  // console.log('redner page')
  if (isLoading) {
    return <Layout >
     <Loading className={styles.loading} />
    </Layout>
  }

// console.log(filter)
  if (!isLoading) {
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
            <Restaurants className={styles.container} filterId={filter} />
          </div>
        </div>
      </Layout>
    );
  }
};
