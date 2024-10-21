import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, toggleFavorite } from "../slices/cartSlice"
import images from '../Json/api.json'; 
import "../styles/categoryWise.scss";

const CategoryGallery = () => {
    const { category } = useParams();
    
console.log("Selected category:", category);

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.cart.favorites);
    const categoryImages = images[category] || [];
    console.log("Images in this category:", categoryImages);
    console.log("Available categories:", Object.keys(images));

    

    const handleAddToCart = (image) => {
        dispatch(addToCart(image));
        alert(`${image.name} added to cart!`);
    };

    const handleToggleFavorite = (image) => {  
        dispatch(toggleFavorite(image));
    };

    return (
        <div className="cards-container">
            <h1>{category.replace('-', ' ')}</h1>
            <div className="image-grid">
                {
                categoryImages.length > 0 ? (
                    categoryImages.map((image) => (
                        <div key={image.id} className="image-card">
                            <img src={image.src} alt={image.name} />
                            <h2>{image.name}</h2>
                            <h4>
                                <span style={{ textDecoration: 'line-through', marginRight: '8px' }}>
                                    ₹{image.originalPrice}
                                </span>
                                <span>₹{image.price}</span>
                            </h4>
                            <div className="button-container">
                                <span 
                                    className="favorite" 
                                    onClick={() => handleToggleFavorite(image)}
                                >
                                    {favorites.some(fav => fav.id === image.id) ? '❤️' : '🤍'}
                                </span>
                                <button 
                                    className="add-to-cart" 
                                    onClick={() => handleAddToCart(image)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2>No images found for this category.</h2>
                )}
            </div>
        </div>
    );
};

export default CategoryGallery;
