import React from 'react';
import './Booking.css';
import { useNavigate } from 'react-router-dom';

const Booking = ({ bookedCars }) => {
  const navigate = useNavigate();  // Corrected: Call useNavigate as a function

  const payment = (e) => {
    e.preventDefault();  // Prevent form submission
    navigate("/payment");  // Navigate to the payment page
  };

  return (
    <div className="booking">
      <div className="Booking_right">
        <h2>Booked Cars</h2>
        {bookedCars.length === 0 ? (
          <p>No cars have been booked yet.</p>
        ) : (
          <ul>
            {bookedCars.map((car) => (
              <li key={car._id}>
                <img src={car.image} alt={car.name} width="100" />
                <p><strong>{car.name}</strong></p>
                <p><strong>{car.description}</strong></p>
              </li>
            ))}
          </ul>
        )}

        <div className='Booking_left'>
          <h3>Customer Information</h3>
          <form onSubmit={payment}>
            <p>Name</p>
            <input type="text" placeholder="Enter your name" />
            <p>E-mail</p>
            <input type="text" placeholder="Enter your Email" />
            <p>Phone Number</p>
            <input type="tel" placeholder="Enter your phone number" />
            <h3>Booking Date & Time</h3>
            <p htmlFor="date">Choose Date:</p>
            <input id="date" type="date" />

            <h3>Pick-Up Location</h3>
            <select>
              <option value="city_center">Location 1 - City Center</option>
              <option value="airport">Location 2 - Jomo Kenyatta International Airport (JKIA)</option>
              <option value="westlands">Location 3 - Westlands</option>
              <option value="kilimani">Location 4 - Kilimani</option>
              <option value="upperhill">Location 5 - Upper Hill</option>
              <option value="gigiri">Location 6 - Gigiri</option>
              <option value="karens">Location 7 - Karen</option>
              <option value="ruiru">Location 8 - Ruiru</option>
              <option value="mombasa_road">Location 9 - Mombasa Road</option>
              <option value="ngong_road">Location 10 - Ngong Road</option>
              <option value="south_b">Location 11 - South B</option>
            </select>

            {/* The button should submit the form */}
            <button type="submit" className="paymentBtn">Proceed to payment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
