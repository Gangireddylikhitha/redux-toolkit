// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../slices/searchSlice';
import homeReducer from '../slices/homeSlice'; // Import your homeSlice
import imageReducer from '../slices/imageCategory'; // Import your imageSlice

const store = configureStore({
  reducer: {
    search: searchReducer,
    home: homeReducer,
    images: imageReducer, // Add images reducer here
  },
});

export default store;
