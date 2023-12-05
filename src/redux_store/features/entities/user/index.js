import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../constants/normalize_mock/normalized-mock";

export const userSlice = createSlice( {
  name: 'user',
  initialState: {
    entities: normalizedUsers.reduce( (users,user) => {
      users[user.id] = user
      
      return users
    } , {}), 
    ids: normalizedUsers.map( ({ id }) => id)
  }
} )