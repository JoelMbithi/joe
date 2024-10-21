import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
      <div className='home_container'>
        {/* Add an alt attribute for accessibility */}
        <img className='home_image' src='./image/home.png' alt='Home page banner' />

        <div className='home_row'>
          <Product id='12345' title="The Lean Startup" price={29.94} image="lean Startup.jpeg" rating={3} alt="The Lean Startup book cover" />
          <Product id='1532' title="Sound Bar" price={30.8} image="sound bar.jpeg" rating={3} alt="A modern sound bar" />
        </div>

        <div className='home_row'>
          <Product id='00987' title="Gaming Headphones" price={94.8} image="gaming headphones.jpeg" rating={3} alt="Gaming headphones" />
          <Product id='1643' title="Fridge" price={74.8} image="fridge.jpeg" rating={3} alt="A refrigerator" />
          <Product id='15082' title="Laptop" price={40.8} image="laptop.webp" rating={3} alt="A laptop" />
        </div>

        <div className='home_row'>
          <Product id='0932' title="TV" price={18} image="tv.jpeg" rating={3} alt="A TV set" />
        </div>
      </div>
    </div>
  );
}

export default Home;
