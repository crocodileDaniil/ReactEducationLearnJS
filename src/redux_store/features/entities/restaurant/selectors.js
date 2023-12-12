export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantById = (state, id) =>
  selectRestaurantModule(state)?.entities[id];

export const selectRestaurantName = (state, id) => selectRestaurantModule(state).entities[id].name

export const selectRestaurantsFilteredById = ( state, id ) => {
  const restaurantsIds = selectRestaurantIds(state)
  return restaurantsIds.filter((elem) => elem === id || id === "All" )
}

export const selectRestaurantStatus = (state) => selectRestaurantModule(state).status