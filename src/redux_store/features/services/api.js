import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: "restaurants",
      }),
    }),
    getRestaurantDishes: builder.query({
      query: (restaurantId) => ({
        url: `dishes?restaurantId=${restaurantId}`,
      }),
    }),
    getRestaurantReviews: builder.query({
      query: (restaurantId) => ({
        url: `reviews?restaurantId=${restaurantId}`,
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: "users/",
      }),
    }),
  }),
});

export const { 
useGetRestaurantsQuery,
useGetRestaurantDishesQuery,
useGetRestaurantReviewsQuery,
useGetUsersQuery
    } = api;
