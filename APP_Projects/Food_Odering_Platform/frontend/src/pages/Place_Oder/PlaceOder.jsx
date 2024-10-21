import React, { useContext, useState } from 'react';
import "./PlaceOder.css"
import { StoreContext } from '../../Contest/StorelContext';

const PlaceOrder = () => {

  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map(()=>{
      if (cartItems[cartItems._id]>0) {
        let itemInfor = item;
        itemInfor["quantity"] = cartItems[item._id]
        orderItems.push(itemInfor)
      }
    })

    console.log(orderItems)

  }


  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Deelivery Information</p>
        <div className="multi-fields">
          <input name='firstName' onChange={onchangeHandler} value={data.firstName} type="text" placeholder='First name' />
          <input name='lastName' onChange={onchangeHandler} value={data.lastName} type="text" placeholder='Last name' />
        </div>
        <input name='email' onChange={onchangeHandler} value={data.email} type="email" placeholder='Email address' />
        <input name='street' onChange={onchangeHandler} value={data.street} type="text" placeholder='Street' />

        <div className="multi-fields">
          <input name='city' onChange={onchangeHandler} value={data.city} type="text" placeholder='City' />
          <input name='state' onChange={onchangeHandler} value={data.state} type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input name='zipcode' onChange={onchangeHandler} value={data.zipcode} type="text" placeholder='Zip code' />
          <input name='country' onChange={onchangeHandler} value={data.country} type="text" placeholder='Country' />
        </div>
        <input name='phone' onChange={onchangeHandler} value={data.phone} type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <p>${getTotalCartAmount() + 2}</p>
          </div>
          <button type='submit' >PROCEED PAYMENT</button>
        </div>

      </div>
    </form>
  );
}

export default PlaceOrder;


// my details not showing on cart page on my website to be continued to reseearch on the issue please start  at 7:52:46 in the tutorio