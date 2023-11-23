
import { useState } from "react";
import { FilterFoods } from "../../components/filter_menu/component";
import { Restaurants } from "../../components/restaurants/component";
=======



export const RestaurantsPage = ({ mock }) => {
  const filters = structuredClone(mock)
    .map((elem) => elem.name)
    .concat(["All","Reset"]);
  const [filter, setFilter] = useState("");
  // console.log("value filter", filter);
  const foods = mock.filter(elem => elem.name === filter || filter === "All")
  
  return (
    <div>
      <FilterFoods
        filters={filters}
        onFilterClick={(newFilter) => {
          setFilter(newFilter);
        }}
      />
      <Restaurants dataFoods={foods} />
    </div>
  );
};
