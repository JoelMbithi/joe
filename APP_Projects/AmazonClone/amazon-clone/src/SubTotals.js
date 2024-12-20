import React from 'react'
import './SubTotals.css'
import  CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';
function SubTotals() {


  const  navigate = useNavigate();
  const  [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
      renderText={(value) => (
        <>
        <p>
          Subtotals [{basket.length} items]:<strong>{value}</strong>
        </p>
        <small className='subtotal_gift'>
          <input type='checkbox'/>This order contains a gift
        </small>
        </>
  )}
  decimalScale={2}
  value={getBasketTotal(basket)}
  displayType={'text'}
  thousandSeparator={true}
  prefix={'$'}
      />
  
      <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
      
    </div>
  )
}

export default SubTotals
