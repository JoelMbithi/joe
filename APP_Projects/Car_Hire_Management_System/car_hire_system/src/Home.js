import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import SubaruForester from './assets/SubaruForester.jpeg';
import bmw1 from './assets/bmw1.jpeg';
import bmw2 from './assets/bmw2.jpeg';
import Hilax from './assets/Hilax.jpeg';
import benz from './assets/benz.jpeg';
import benz1 from './assets/benz1.jpeg';
import ToyotaHarrier from './assets/ToyotaHarrier.jpeg';
import ToyotaNissan from './assets/ToyotaNissan.jpeg';

const car_list = [
  {
    _id: "1",
    name: "Subaru Forester",
    image: SubaruForester,
    price: 25000,
    description: "A reliable and spacious SUV."
  },
  {
    _id: "2",
    name: "BMW 1",
    image: bmw1,
    price: 30000,
    description: "A luxurious and sporty BMW Series 1."
  },
  {
    _id: "3",
    name: "BMW 2",
    image: bmw2,
    price: 32000,
    description: "A powerful and stylish BMW Series 2."
  },
  {
    _id: "4",
    name: "Toyota Hilux",
    image: Hilax,
    price: 27000,
    description: "A tough and versatile Toyota Hilux truck."
  },
  {
    _id: "5",
    name: "Benz 1",
    image: benz1,
    price: 46000,
    description: "The ultimate luxury experience in a Mercedes Benz 1."
  },
  {
    _id: "6",
    name: "Mercedes",
    image: benz,
    price: 45000,
    description: "An elegant and refined Mercedes Benz."
  },
  {
    _id: "7",
    name: "Toyota Harrier",
    image: ToyotaHarrier,
    price: 28000,
    description: "A stylish and modern Toyota Harrier SUV."
  },
  {
    _id: "8",
    name: "Toyota Nissan",
    image: ToyotaNissan,
    price: 29000,
    description: "A dependable Toyota Nissan crossover."
  }
];

const Home = ({ setBookedCars }) => {
  const [selectedCars, setSelectedCars] = useState([]);
  const navigate = useNavigate();

  const bookCar = (car) => {
    const updatedCars = [...selectedCars, car];
    setSelectedCars(updatedCars);
    setBookedCars(updatedCars);  // Update parent state
    navigate('/booking');  // Redirect to the booking page
  };

  return (
    <div className='home'>
      <div className='left_Bar'>
        <a href='#'>Home</a>
        <a href='#'>Contact us</a>
        <a href='/payment'>Payments</a>
        <a href='#'>Settings</a>
        <a href='#'>Description</a>
      </div>

      <div className='Homecenter_Bar'>
        <h4>CarVoyage</h4>
        <div className='cars'>
          {car_list.map((car) => (
            <div className='car_item' key={car._id}>
              <img src={car.image} alt={car.name} />
              <p>{car.name}</p>
              <button onClick={() => bookCar(car)}>Book</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
