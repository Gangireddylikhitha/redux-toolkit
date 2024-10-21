import React from 'react';
import { useParams } from 'react-router-dom';
import images from '../Json/api.json';
import "../styles/singlepic.scss"

const ProductDetails = () => {
    const { id } = useParams();
    const paintingId = Number(id); 

    console.log("Product ID:", paintingId); 

    const painting = Object.entries(images).flatMap(([_, items]) => items).find(item => item.id === paintingId);
    console.log("Selected Painting:", painting);
    if (!painting) {
        return <h2>Painting not found</h2>;
    }

    return (
        <div className="product-details">
            <div className="details-image">
                <img src={painting.src} alt={painting.name} onError={(e) => { e.target.src = 'path/to/fallback/image.jpg'; }} />
            </div>
            <div className="details-info">
                <h1>{painting.name}</h1>
                <h2>₹{painting.price}</h2>
                
                {painting.originalPrice && (
                    <h3 className="original-price"><del>₹{painting.originalPrice}</del></h3>
                )}
                <p>Handmade painting by ChitraShadez</p>
                <h4>Select Frame Type:</h4>
                <div className="frame-options">
                    {painting.frameTypes && painting.frameTypes.map((frame, index) => (
                        <span key={index} className="frame-option">{frame}</span>
                    ))}
                </div>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;
