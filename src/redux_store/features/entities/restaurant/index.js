import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../constants/normalize_mock/normalized-mock";

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: { 
    entities:  normalizedRestaurants.reduce( (restaurants, restaurant) => {
      
      restaurants[restaurant.id] = restaurant
      
      return restaurants
    }, {}) ,
    ids: normalizedRestaurants.map(({ id }) => id),
  },
})