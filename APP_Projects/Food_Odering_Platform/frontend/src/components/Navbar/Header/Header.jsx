import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'> 
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>We offer a variety of delicious meals, including breakfast, lunch, dinner, snacks, and beverages, to cater to all your culinary preferences.</p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
