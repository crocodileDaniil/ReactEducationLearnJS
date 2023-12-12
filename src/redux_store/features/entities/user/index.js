import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../../constants/request_statuses";
import { getUsers } from "./thunks/get_users";

export const userSlice = createSlice( {
  name: 'user',
  initialState: {
    entities:{}, 
    ids: [],
    status: REQUEST_STATUSES.idle
  },
  extraReducers: (builder) => builder.addCase(
    getUsers.pending, (state, action) => {
      state.status = REQUEST_STATUSES.pending
    }
  ).addCase(
    getUsers.fulfilled, (state, { payload }) => {
      state.status = REQUEST_STATUSES.fullfield

      state.entities = payload.reduce((users, user) => {
        users[user.id] = user;
        return users;
      }, {});

      state.ids = payload.map(({ id }) => id);
    }
  ).addCase(getUsers.rejected, ( state, action ) => {
    state.status = REQUEST_STATUSES.rejected
  })
});