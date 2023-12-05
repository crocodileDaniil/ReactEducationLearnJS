import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../../constants/normalize_mock/normalized-mock";

export const reviewSlice = createSlice({
  name:'review',
  initialState: {
    entities: normalizedReviews.reduce( (reviews, review) => {
      reviews[review.id] = review

      return reviews
    }, {}),
    ids: normalizedReviews.map( ({ id }) => id),
  }
})