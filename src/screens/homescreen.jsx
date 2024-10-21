// src/screens/HomeScreen.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import NavLink
import { VideoGallery } from '../components/video'; // Adjust the import path if needed
import ImageCard from '../components/imageCategories'; // Adjust the import path if needed
import { useDispatch, useSelector } from 'react-redux';
import { setVideoGallery } from '../slices/homeSlice'; // Import your actions
import { selectImages } from "../slices/imageCategory";
import "../styles/imagecategory.scss";
import "../styles/video.scss";
import "../styles/footer.scss";

const HomeScreen = () => {
    const dispatch = useDispatch();
    
    // Fetch images from Redux store
    const images = useSelector(selectImages);
    console.log(images, "imaging");

    return (
        <>
          
            <VideoGallery />

          
            <div className="custom-heading">
                <h1>Custom Artistry</h1>
                <h2 className="colour-ideas">Transforming your ideas into stunning visuals!</h2>
            </div>

            
            <ImageCard />

         
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

           
            <section className="collection-explore">
                <h3>Discover Our Exquisite Art Collection for Every Room</h3>
                <p>
                    Explore our diverse array of art pieces designed to enhance any part of your home. 
                    Whether seeking a striking centerpiece for your living room, a calming piece for your 
                    bedroom, or a vibrant accent for your dining area, ChitraShadez caters to all tastes and styles.
                </p>
            </section>

          
            <section className="upcoming-paintings">
                <h1>Upcoming Artworks</h1>
                <h3>Select Your Favorite</h3>
                <p>
                    Explore our upcoming paintings that blend creativity with artistry. Each piece is crafted with 
                    care and passion, ensuring it resonates with your artistic sensibilities. From abstract to realism, 
                    we have something for every art lover.
                </p>
            </section>

            
            <footer className="footer">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <ul>
                        <li><NavLink to="/about">Who We Are</NavLink></li>
                        <li><NavLink to="/newsletter">Subscribe to Our Newsletter</NavLink></li>
                        <li><NavLink to="/careers">Career Opportunities</NavLink></li>
                        <li><NavLink to="/discounts">Student Discounts</NavLink></li>
                        <li><NavLink to="/wholesale">Wholesale Inquiries</NavLink></li>
                        <li><NavLink to="/collaborations">Trade Collaborations</NavLink></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Customer Support</h3>
                    <ul>
                        <li><NavLink to="/track-order">Track My Order</NavLink></li>
                        <li><NavLink to="/returns">Return Policy</NavLink></li>
                        <li><NavLink to="/faq">Frequently Asked Questions</NavLink></li>
                        <li><NavLink to="/support">Contact Support</NavLink></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Shop</h3>
                    <ul>
                        <li><NavLink to="/art-prints">Art Prints</NavLink></li>
                        <li><NavLink to="/canvas-art">Canvas Art</NavLink></li>
                        <li><NavLink to="/phone-cases">Phone Cases</NavLink></li>
                        <li><NavLink to="/home-textiles">Home Textiles</NavLink></li>
                        <li><NavLink to="/decor-pillows">Decorative Pillows</NavLink></li>
                        <li><NavLink to="/gift-cards">Gift Cards</NavLink></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>For Artists</h3>
                    <ul>
                        <li><NavLink to="/contributor">Become a Contributor</NavLink></li>
                        <li><NavLink to="/community">Join Our Community</NavLink></li>
                        <li><NavLink to="/artist-resources">Artist Resources</NavLink></li>
                        <li><NavLink to="/collab-guidelines">Collaboration Guidelines</NavLink></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Stay Connected</h3>
                    <ul>
                       <li><Link to="#">Pinterest</Link></li>
                       <li><Link to="#">Facebook</Link></li>
                       <li><Link to="#">Twitter</Link></li>
                       <li><Link to="#">Instagram</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <p>&copy; 2023 ChitraShadez. All Rights Reserved.</p>
                    <ul>
                        <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                        <li><NavLink to="/cookie-policy">Cookie Policy</NavLink></li>
                        <li><NavLink to="/terms-of-service">Terms of Service</NavLink></li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default HomeScreen;
