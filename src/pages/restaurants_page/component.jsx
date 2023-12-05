import { useState } from "react";
import { FilterFoods } from "../../components/filter_menu/component";
import { Restaurants } from "../../components/restaurants/component";
import styles from "./styles.module.css";
import { Layout } from "../../components/layout/component";

export const RestaurantsPage = ({ mock }) => {
  const [filter, setFilter] = useState("");

  const filters = structuredClone(mock)
    .map((elem) => elem.name)
    .concat(["All", "Reset"]);

  // console.log(theme, );

  const foods = mock.filter((elem) => elem.name === filter || filter === "All");

  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.wpapper}>
          <FilterFoods
            className={styles.container}
            filters={filters}
            onFilterClick={(newFilter) => {
              setFilter(newFilter);
            }}
          />
        </div>
        <div className={styles.wpapper}>
          <Restaurants className={styles.container} dataFoods={foods} />
        </div>
      </div>
    </Layout>
  );
};
