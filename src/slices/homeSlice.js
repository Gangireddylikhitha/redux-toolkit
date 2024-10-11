// src/slices/homeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    videoGallery: [],  // You can set initial state with your video data if available
    imageGallery: [],  // Similarly for images
    
  },
  reducers: {
    setVideoGallery: (state, action) => {
      state.videoGallery = action.payload;
    },
    setImageGallery: (state, action) => {
      state.imageGallery = action.payload;
    },
    // Add more reducers if needed
  },
});

export const { setVideoGallery, setImageGallery } = homeSlice.actions;
export default homeSlice.reducer;
