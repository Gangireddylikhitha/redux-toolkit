import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HeartOutlined, ShoppingCartOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons'; 
import logo from "../assets/LOGO.png";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch } from '../slices/searchSlice';
import "../styles/navbar.scss"

const Navbar = () => {
  const dispatch = useDispatch();
  const searchVisible = useSelector((state) => state.search.searchVisible);
 
  const handleSearchToggle = () => {
    dispatch(toggleSearch());
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} style={{ width: 100, height: 100 }} alt="Logoname" />
          </Link>
        </div>

        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.SubMenu title="Category" className='category-name'>
            <Menu.Item key="oil Painting">
              <Link to="/categories/oilpainting">Oil Painting</Link>
            </Menu.Item>
            <Menu.Item key="Landscape">
              <Link to="/categories/landscape">Landscape</Link>
            </Menu.Item>
            <Menu.Item key="potrait">
              <Link to="/categories/potrait">Portrait</Link>
            </Menu.Item>
            <Menu.Item key="Abstract">
              <Link to="/categories/abstract">Abstract</Link>
            </Menu.Item>
            <Menu.Item key="acrylic">
              <Link to="/categories/acrylic">Acrylic</Link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item key="ArtGallery">
            <Link to="/artGallery">Art Gallery</Link>
          </Menu.Item>

          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>

          <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>

          {/* Search bar and icon */}
          <Menu.Item key="search" className="search-container">
            <SearchOutlined className="search-icon" onClick={handleSearchToggle} />
            {searchVisible && (
              <input type="text" className="search-bar" placeholder="Search for art..." />
            )}
          </Menu.Item>

          <Menu.Item key="wishlist" className="wishlist" icon={<HeartOutlined />}>
            <Link to="/wishlist" />
          </Menu.Item>

          <Menu.Item key="cart" className="cart-list" icon={<ShoppingCartOutlined />}>
            <Link to="/cart" />
          </Menu.Item>

          <Menu.Item key="profile" className="profile" icon={<UserOutlined />}>
            <Link to="/profile" />
          </Menu.Item>
        </Menu>
      </nav>
    </>
  );
};

export default Navbar;
