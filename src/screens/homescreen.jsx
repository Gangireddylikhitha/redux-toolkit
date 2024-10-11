// src/screens/HomeScreen.js
import React from 'react';
import { VideoGallery } from '../components/video'; // Adjust the import path if needed
import ImageCard from '../components/imageCategories'; // Adjust the import path if needed
import { useDispatch, useSelector } from 'react-redux';
import { setVideoGallery } from '../slices/homeSlice'; // Import your actions
import { selectImages } from "../slices/imageCategory"
import "../styles/imagecategory.scss"
import "../styles/video.scss"
import "../styles/footer.scss"

const HomeScreen = () => {
    const dispatch = useDispatch();
    
    // Fetch images from Redux store
    const images = useSelector(selectImages);
    console.log(images,"imaging")

    return (
        <>
            {/* Video Gallery */}
            <VideoGallery />

            {/* Custom Heading */}
            <div className="custom-heading">
                <h1>Custom Artistry</h1>
                <h2 className="colour-ideas">Transforming your ideas into stunning visuals!</h2>
            </div>

            {/* Image Gallery */}
            <ImageCard />

            {/* Welcome Message */}
            <section className="welcome-message">
                <h2>Welcome to ChitraShadez</h2>
                <p>Your Premier Destination for Exquisite Art Prints and Handmade Creations</p>
                <p>
                    Where art meets inspiration and creativity thrives. Dive into a realm of artistic expression 
                    where every brushstroke tells a unique story, and every canvas embodies a distinctive vision.
                    At ChitraShadez, we meticulously curate an impressive selection of premium art prints and 
                    handmade artworks, thoughtfully chosen to elevate your living spaces with elegance and charm.
                </p>
            </section>

            {/* Explore Collection */}
            <section className="collection-explore">
                <h3>Discover Our Exquisite Art Collection for Every Room</h3>
                <p>
                    Explore our diverse array of art pieces designed to enhance any part of your home. 
                    Whether rea seeking a striking centerpiece for your living room, a calming piece for your 
                    bedroom, or a vibrant accent for your dining area, ChitraShadez caters to all tastes and styles.
                </p>
            </section>

            {/* Upcoming Paintings Section */}
            <section className="upcoming-paintings">
                <h1>Upcoming Artworks</h1>
                <h3>Select Your Favorite</h3>
                <p>
                    Explore our upcoming paintings that blend creativity with artistry. Each piece is crafted with 
                    care and passion, ensuring it resonates with your artistic sensibilities. From abstract to realism, 
                    we have something for every art lover.
                </p>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="#">Who We Are</a></li>
                        <li><a href="#">Subscribe to Our Newsletter</a></li>
                        <li><a href="#">Career Opportunities</a></li>
                        <li><a href="#">Student Discounts</a></li>
                        <li><a href="#">Wholesale Inquiries</a></li>
                        <li><a href="#">Trade Collaborations</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Customer Support</h3>
                    <ul>
                        <li><a href="#">Track My Order</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Frequently Asked Questions</a></li>
                        <li><a href="#">Contact Support</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Shop</h3>
                    <ul>
                        <li><a href="#">Art Prints</a></li>
                        <li><a href="#">Canvas Art</a></li>
                        <li><a href="#">Phone Cases</a></li>
                        <li><a href="#">Home Textiles</a></li>
                        <li><a href="#">Decorative Pillows</a></li>
                        <li><a href="#">Gift Cards</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>For Artists</h3>
                    <ul>
                        <li><a href="#">Become a Contributor</a></li>
                        <li><a href="#">Join Our Community</a></li>
                        <li><a href="#">Artist Resources</a></li>
                        <li><a href="#">Collaboration Guidelines</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Stay Connected</h3>
                    <ul>
                        <li><a href="#">Pinterest</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <p>&copy; 2023 ChitraShadez. All Rights Reserved.</p>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default HomeScreen;
