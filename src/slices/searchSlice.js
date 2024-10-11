// src/redux/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchVisible: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    toggleSearch: (state) => {
      state.searchVisible = !state.searchVisible;
    },
  },
});

export const { toggleSearch } = searchSlice.actions;

export default searchSlice.reducer;
