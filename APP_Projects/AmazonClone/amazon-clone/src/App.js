import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders';

// STRIPE API KEY 
const promise = loadStripe('pk_test_51PjQ6bRpAOqKeKpZfmvxxbYgVNO3dp27GOJP9ITxC9naNbJh6pjFzIbGqvAFvvIAyOSws3JlveZD2WaqqKs8MC3e00zjG7Q3EJ');

function App() {

  const [, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // The user just logged in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, [dispatch]);

  const location = useLocation(); // Hook to get the current route

  return (
    <div className="App">
      {/** Conditionally render Header based on the current path */}
      {location.pathname !== '/Login' && <Header />}

      <Routes>
        <Route 
          path="/Payment" 
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          } 
        />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
