import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Contest/StorelContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate(); 

  const calculateSubtotal = () => {
    return food_list.reduce((sum, item) => {
      return sum + item.price * (cartItems[item._id] || 0);
    }, 0);
  };

  const deliveryFee = 2;
  const subtotal = calculateSubtotal();
  const total = subtotal + deliveryFee;

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
       
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <p>${getTotalCartAmount() === 0 ? 0 : (getTotalCartAmount() + 2).toFixed(2)}</p>
          </div>
          <button onClick={() => navigate('/payment')}>PROCEED TO PAYMENT</button>
        </div>
      <div className="cart-promocode">
        <div >
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text " placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
