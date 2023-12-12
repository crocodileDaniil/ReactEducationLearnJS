import { createSlice } from "@reduxjs/toolkit";

import { getDishes } from "./thunks/get_dishes";
import { REQUEST_STATUSES } from "../../../../constants/request_statuses";

export const dishSlice = createSlice({
  name: 'dish',
  initialState: {
    restaurantsLoded: [],
    entities: {},
    ids: [],
    status: REQUEST_STATUSES.idle
  },
  reducers: {
    statusInitialStart : (state) => {
     
      return {
        ...state,
        status: REQUEST_STATUSES.idle
      }
    }
  },
  extraReducers: builder => builder
    .addCase(getDishes.pending, ( state,action ) => {
      state.status = REQUEST_STATUSES.pending
      // console.log(REQUEST_STATUSES.pending)
    })
    .addCase(getDishes.fulfilled, ( state, { payload } ) => {
      state.status = REQUEST_STATUSES.fullfield
      // console.log(REQUEST_STATUSES.fullfield)

      state.restaurantsLoded.push(payload[payload.length - 1])

      state.entities = {
        ...state.entities,
        ...payload.reduce((dishes, dish) => {
          if (!!dish.id) {
            dishes[dish.id] = dish;
          }
          return dishes;
        }, {}),
      };
      // console.log('payload', payload)
      state.ids = Array.from( new Set([
        ...state.ids,
        ...payload.slice(0, payload.length - 1).map(({ id }) => id),
      ]));

      // state.status = REQUEST_STATUSES.pending
    })
    .addCase(getDishes.rejected, ( state,action ) => {
      // console.log(REQUEST_STATUSES.rejected)
      state.status = REQUEST_STATUSES.rejected
    })
})

export const dishActions = dishSlice.actions