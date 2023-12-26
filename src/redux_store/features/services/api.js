import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Review"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: "restaurants",
      }),
      // providesTags: ( result ) => result.map( ({ id }) => ({type: 'Reviews', id }) ).concat( {type: 'Review', id: 'All'})
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
      providesTags: (result) =>
        result
          .map(({ id }) => ({ type: "Reviews", id }))
          .concat({ type: "Review", id: "All" }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: "users/",
      }),
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, newReview }) => ({
        // url:`review/${ userId }`,
        url: `review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
<
      invalidatesTags: (result) => [{ type: "Review", id: "All" }],
    }),
    updateReview: builder.mutation({
      query: ({ reviewId, newReview }) => ({
        // url:`review/${ userId }`,
        url: `review/${reviewId}`,
        method: "PATCH",
        body: newReview,
      }),
      invalidatesTags: (result) => [{ type: "Review", id: "All" }],
    }),
  }),
});


export const {
  useGetRestaurantsQuery,
  useGetRestaurantDishesQuery,
  useGetRestaurantReviewsQuery,
  useGetUsersQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
} = api;

