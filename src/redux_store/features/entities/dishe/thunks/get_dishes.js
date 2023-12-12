import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesRestarantLoaded } from "../selectors";
import { useDispatch } from "react-redux";
import { dishActions } from "..";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (restaurantId, { rejectWithValue }) => {
  


    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();
      
     if (!result?.length) {
      return rejectWithValue("Empty dishes")
    } 
    result[result.length] = restaurantId;
    // console.log(result)
    return result
  },
  {
    condition: (restaurantId, { getState }) => {
      // console.log('проверка')
      // console.log('результат проверка', !selectDishesRestaorantLoaded(getState()).includes(restaurantId))
     
     return !selectDishesRestarantLoaded(getState()).includes(restaurantId)},
  }
);
