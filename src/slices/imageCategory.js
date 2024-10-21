
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    images: [
        {
            src: "https://i.pinimg.com/564x/3b/be/65/3bbe6586a7ff24072a8bf125611d7f94.jpg",
            name: "Oil Painting"
        },
        {
            src: "https://i.pinimg.com/736x/15/58/74/15587427adf27915aeb3524b81d785b7.jpg",
            name: "Landscape"
        },
        {
            src: "https://i.pinimg.com/564x/34/fa/c8/34fac81e8da463b26c46a8665674b5de.jpg",
            name: "Portrait"
        },
        {
            src: "https://i.pinimg.com/564x/58/c0/6c/58c06ceb15d898afcf7da79866c84484.jpg",
            name: "Abstract"
        },
        {
            src: "https://i.pinimg.com/564x/15/f7/7b/15f77bbcedf0442d3e630f8724d91b6c.jpg",
            name: "Nature Scene"
        },
        {
            src: "https://i.pinimg.com/564x/c7/d4/97/c7d4976c5e5d28730b01d4f77cb9ba75.jpg",
            name: "Still Life"
        }
    ]
};

const imageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {}
});

export const selectImages = (state) => state.images.images;

export default imageSlice.reducer;
