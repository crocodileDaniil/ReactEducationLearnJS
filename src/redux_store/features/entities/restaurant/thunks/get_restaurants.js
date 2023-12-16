import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";

export const getRestaurants = createAsyncThunk('restaurant/getRestaurants',
async (_, { rejectWithValue } ) => {
  const response = await fetch('http://localhost:3001/api/restaurants');

  const result = await response.json();
  // console.log('делаю запрос в ресторан')
  
  return  !result?.length ? rejectWithValue("Empty restaurants") : result
},
{
  condition: (_ , { getState }) => {
    // console.log('selectRestaurantIds(getState()).length',selectRestaurantIds(getState()).length)
    return !selectRestaurantIds(getState()).length
  }
}
)