import React from 'react'
import './Checkout.css'
import SubTotals from './SubTotals'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
function Checkout() {

  const [{basket, user}, dispatch] = useStateValue();
    
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src='./image/checkout.png' alt=''/>

        <div>
          <h3>Hello, {user.email}</h3>
            <h2 className='checkout_title'>Your Shopping Basket</h2>
            {basket.map(item =>(
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            ))}

        </div> 
        
      </div>

      <div className='checkout_right'>
        <SubTotals/> 
      </div>
    </div>
  )
}

export default Checkout
