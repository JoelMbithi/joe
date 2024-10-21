import React from 'react';
import './NavBar.css';
import { assets } from '../../assets/assets';

const NavBar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="Logo" />
      <h1>Admin Panel</h1>
      <img className='profile' src={assets.profile_icon} alt="Profile" />
    </div>
  );
}

export default NavBar;
