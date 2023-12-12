import { createSlice } from "@reduxjs/toolkit";
// import { normalizedRestaurants } from "../../../../constants/normalize_mock/normalized-mock";
import { getRestaurants } from "./thunks/get_restaurants";
import { REQUEST_STATUSES } from "../../../../constants/request_statuses";


export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: { 
    entities: {} ,
    ids: [],
    status: REQUEST_STATUSES.idle
  },
  extraReducers: (builder) => builder
    .addCase( getRestaurants.pending, ( state, action) => { 
      // console.log('restaurant pending')
      state.status = REQUEST_STATUSES.pending 
     })
    .addCase( getRestaurants.fulfilled, ( state, { payload } ) => {
      // console.log('restaurant payload')
      state.entities = payload.reduce( (restaurants, restaurant) => {
      
      restaurants[restaurant.id] = restaurant
      
      return restaurants
    }, {})
    state.ids = payload.map(({ id }) => id)
    state.status = REQUEST_STATUSES.fullfield

     })
    .addCase( getRestaurants.rejected, ( state, action) => {
      // console.log('restaurant rejected')
      state.status = REQUEST_STATUSES.rejected
     })
})