import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserEntities, selectUserModule } from "../selectors";

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async(_, { rejectWithValue }) => {
        const response = await fetch("http://localhost:3001/api/users/");
        
        const result = await response.json()
        
        if (!result.length) {
            return rejectWithValue('Empty users')
        }
        return result
    },
    {
        condition: (_, { getState }) => {
            // console.log(
            //   "Провер_очка users",
            //   !selectUserEntities(getState()).length
            // );
            return !selectUserEntities(getState()).length
        } 
    }
)