import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../../constants/normalize_mock/normalized-mock";

export const dishSlice = createSlice({
  name: 'dish',
  initialState: {
    entities: normalizedDishes.reduce(( dishes,dish ) => {
      dishes[dish.id] = dish
      
      return dishes
    },{}),
    ids: normalizedDishes.map(({ id }) => id ),
  }
})