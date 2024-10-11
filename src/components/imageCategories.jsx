// src/components/ImageCard.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectImages } from '../slices/imageCategory'; // Adjust the path if needed
// import './ImageCard.css'; // Import the CSS file for styles

const ImageCard = () => {
    const images = useSelector(selectImages);
    console.log(images,"image")

    return (
        <div className="card-container">
            <div className="card">
                <h1>Image Gallery</h1>
                <div className="image-grid">
                    {images.map((image, index) => (
                        <div key={index} className="image-card">
                            <img src={image.src} alt={`Image ${index + 1}`} />
                            <h2>{image.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
