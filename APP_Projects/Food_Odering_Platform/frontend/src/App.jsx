import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';

import Footer from './components/Footer/Footer';
import PlaceOrder from './pages/Place_Oder/PlaceOder';
import LoginPopup from './components/Login_Popup/LoginPopup';

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    { showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
     
    </div>
    <Footer />
    </>
  );
}

export default App;
