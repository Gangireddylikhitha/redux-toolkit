import React from 'react';
import { Link } from 'react-router-dom';
import images from '../Json/api.json';
import "../styles/ArtGallery.scss";

const ArtGallery = () => {
    if (!images || Object.keys(images).length === 0) {
        return <h2>No images available.</h2>;
    }

    const allImages = Object.entries(images).flatMap(([_, items]) => items);

    return (
        <div className="cards-container">
            <div className="cards">
                <h1>Image Gallery</h1>
                <div className="Art-grid">
                    {
                    allImages.map((image) => (
                        <Link key={image.id} to={`/product/${image.id}`}>
                            <div className="image-cards">
                                <img src={image.src} alt={image.name} />
                                <h3>{image.name}</h3>
                                <p>Handmade painting by ChitraShadez</p>
                                <h4>₹{image.price}</h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArtGallery;
