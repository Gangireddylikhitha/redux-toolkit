// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../slices/searchSlice';
import homeReducer from '../slices/homeSlice'; // Import your homeSlice
import imageReducer from '../slices/imageCategory'; // Import your imageSlice
import cartReducer from "../slices/cartSlice"
import productReducer from "../slices/productSlice"

const store = configureStore({
  reducer: {
    search: searchReducer,
    home: homeReducer,
    images: imageReducer, // Add images reducer here
    cart: cartReducer,
    product: productReducer, 
  },
});

export default store;
