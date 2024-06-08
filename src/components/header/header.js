import React, { useState, useEffect } from 'react';
import './header.css';
import { FaBars } from "react-icons/fa6";

function Header() {
  const [isNavBarVisible, setNavBarVisibility] = useState(false);
  const toggleNavBar = () => {
    setNavBarVisibility(!isNavBarVisible);
  };
  useEffect(() => {
    // Event listener to check window width and update visibility
    const handleResize = () => {
      setNavBarVisibility(window.innerWidth > 800);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Initial check for window width
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [activeNav, setActiveNav] = useState('home');
  const toggleNav = (active) => {
    setActiveNav(active);
  };

  return (
    <div className='header'>
        <div className='logo-div'>
            <span className='logo'>V</span>
            <span className='logo-name'>Shirt</span>
        </div>
        <div className='nav-page-div'>
          <FaBars className='nav-page-icon' onClick={toggleNavBar}/>
        {isNavBarVisible && (
        <div className='page-nav'>
            <a href='#home' className={activeNav === 'home' ? 'active' : ''} onClick={() => toggleNav('home')}>Home</a>
            <a href='#products' className={activeNav === 'products' ? 'active' : ''} onClick={() => toggleNav('products')}>Collection</a>
            <a href='#service' className={activeNav === 'service' ? 'active' : ''} onClick={() => toggleNav('service')}>Services</a>
            <a href='#aboutUs' className={activeNav === 'aboutUs' ? 'active' : ''} onClick={() => toggleNav('aboutUs')}>About Us</a>
            <a href='#contact' className={activeNav === 'contact' ? 'active' : ''} onClick={() => toggleNav('contact')}>Contact</a>
        </div>)}
        </div>
    </div>
  )
}

export default Header