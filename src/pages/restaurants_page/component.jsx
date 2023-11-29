import { useState } from "react";
import { FilterFoods } from "../../components/filter_menu/component";
import { Restaurants } from "../../components/restaurants/component";
import styles from "./styles.module.css";

export const RestaurantsPage = ({ mock }) => {
  const filters = structuredClone(mock)
    .map((elem) => elem.name)
    .concat(["All", "Reset"]);
  const [filter, setFilter] = useState("");
  // console.log("value filter", filter);
  const foods = mock.filter((elem) => elem.name === filter || filter === "All");

  return (
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
  );
};
