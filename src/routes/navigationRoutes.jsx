import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/homescreen";
import AboutScreen from "../screens/aboutScreen";
import ContactPage from "../screens/contact";
import ArtGallery from "../screens/ArtGallery";
import CategoryGallery from "../screens/categorywisepics";
import ProductDetails from "../screens/singlepic";


const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path="/artgallery" element={<ArtGallery/>} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/categories/:category" element={<CategoryGallery/>} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default Navigation;
