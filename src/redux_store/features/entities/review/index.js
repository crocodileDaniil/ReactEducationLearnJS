import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../../constants/request_statuses";
import { getDishes } from "../dishe/thunks/get_dishes";
import { getReviews } from "./thunks/get_reviews";

export const reviewSlice = createSlice({
  name:'review',
  initialState: {
    entities:{},
    ids: [],
    status: REQUEST_STATUSES.idle,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state, action) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        state.status = REQUEST_STATUSES.fullfield;

        state.entities = {
          ...state.entities,
          ...payload.reduce((reviews, review) => {
            if (!!review.id) reviews[review.id] = review;

            return reviews;
          }, {}),
        };

        state.ids = Array.from(
          new Set([...state.ids, ...payload.map(({ id }) => id)])
        );
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
});