// features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // For the cart
    favorites: [], // For the wishlist
  },
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.items.find(item => item.id === action.payload.id);
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },
    toggleFavorite: (state, action) => {
      const index = state.favorites.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        state.favorites.splice(index, 1); // Remove from favorites
      } else {
        state.favorites.push(action.payload); // Add to favorites
      }
    },
  },
});

export const { addToCart, toggleFavorite } = cartSlice.actions;
export default cartSlice.reducer;
