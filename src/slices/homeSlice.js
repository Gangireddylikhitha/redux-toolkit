import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    videoGallery: [],  
    imageGallery: [], 
    
  },
  reducers: {
    setVideoGallery: (state, action) => {
      state.videoGallery = action.payload;
    },
    setImageGallery: (state, action) => {
      state.imageGallery = action.payload;
    },
    
  },
});

export const { setVideoGallery, setImageGallery } = homeSlice.actions;
export default homeSlice.reducer;
