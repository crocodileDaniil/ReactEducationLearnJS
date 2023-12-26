import { configureStore } from "@reduxjs/toolkit";

import { restaurantSlice } from "./features/entities/restaurant";
import { dishSlice } from "./features/entities/dishe";
import { reviewSlice } from "./features/entities/review";
import { userSlice } from "./features/entities/user";
import { api } from "./features/services/api";



const store = configureStore({
  reducer: {
    restaurant: restaurantSlice.reducer,
    dish: dishSlice.reducer,
    review: reviewSlice.reducer,
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(api.middleware),
})

export default store

console.log('redux_store: ' , store.getState() )

export const getStore = () => store.getState()