import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesRestarantLoaded } from "../../dishe/selectors";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("Empty reviews");
    }

    // result[result.length] = restaurantId;
    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
    
      return !selectDishesRestarantLoaded(getState()).includes(restaurantId);
    
    },
  }
);
