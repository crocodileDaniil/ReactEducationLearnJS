import { useState } from "react";
import { FilterFoods } from "../../components/filter_menu/component";
import { Restaurants } from "../../components/restaurants/component";
import styles from "./styles.module.css";
import { Layout } from "../../components/layout/component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "../../redux_store/features/entities/restaurant/thunks/get_restaurants";
import { useSelector } from "react-redux";
import { selectRestaurantStatus } from "../../redux_store/features/entities/restaurant/selectors";
import { Loading } from "../../components/loading/component";

export const RestaurantsPage = () => {
  const [filter, setFilter] = useState("");

  // const restaurants = useSelector( store => selectRestaurantModule(store).entities)

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  const status = useSelector((store) => selectRestaurantStatus(store));
  // console.log(status);

  // console.log('redner page')
  if (status !== "fullfield") {
    return <Layout >
     <Loading className={styles.loading} />
    </Layout>
  }


  if (status === "fullfield") {
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
            <Restaurants className={styles.container} filterIds={filter} />
          </div>
        </div>
      </Layout>
    );
  }
};
