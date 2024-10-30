import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Header from './Header';
import Home from './Home';
import Booking from './Booking';
import Payment from './Payment';


function App() {
  const [bookedCars, setBookedCars] = useState([])

  const location = useLocation()

  return (
    <div className="App">
       {location.pathname !== '/Login' && <Header />}
       <Routes>
  <Route path="/" element={<Home setBookedCars={setBookedCars} />} />
  <Route path="/booking" element={<Booking bookedCars={bookedCars} />} />
  <Route path='/Header' element={<Header/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/payment' element={<Payment/>}/>
</Routes>

    </div>
  );
}

export default App;