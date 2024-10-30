import React, { useState } from 'react';
import './Header.css';
import logo from './assets/logo.webp'; 

import { Link } from 'react-router-dom';

const Header = () => {
 
 

 
  return (
    <div className='Header'>
      <div className='Header_components'>
        <Link to='/'>
        <img className='Header_logo' src={logo} alt='CarVoyage Logo' />
        </Link>
       <h> CarVoyage</h>
        
        <div className='Header_searchBar'>
          <input type='text' />
        </div>

        <div className='Header_Nav'>
          <div className='Header_option'>
            <span className='header_optioninline2'>User</span>
          </div>
          <div className='Header_option'>
            
            <span className='header_optioninline2'>Sign-in</span>
          </div>
          <div className='Header_option'>
            {/* Clicking this link will navigate to the Login page */}
            <Link to='/Login'>
              <span className='header_optioninline2'>Login</span>
            </Link>
          </div>
          <div className='Header_option'>
          <Link to='/booking'>
            <span className='header_optioninline2'>Booking</span>
            </Link>
          </div>
          <div className='Header_option'>
            <span className='header_profile'>Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
