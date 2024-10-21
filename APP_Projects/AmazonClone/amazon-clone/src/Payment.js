import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, Navigate } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from 'axios'
import { db } from './firebase' 

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
         //generate the special sstripe secret which allows to us to chage customer

         const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url:`/payments/create?total=${getBasketTotal[basket] * 120}`
            })
            setClientSecret(response.data.clientSecret)
         }
         getClientSecret()

    },[basket])

   console.log("    THE SECRET IS>>>>", clientSecret)
   console.log("JOE YOOH!",user)

    const handleSubmit = async (event) =>{
        //DO ALL STRIPE FUNCTION HERE
        event.preventDefault()
        setProcessing(true);
          
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent = payment confirmation

            db
               .collection('users')
               .doc(user?.uid)
               .collection('orders')
               .doc(paymentIntent.id)
               .set({
                basket:basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created
               })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            Navigate.replace('/orders')
        })

    }

    const handleChange = event =>{
      //listen to onchange in the cardElement
      //display the errors as the customer type their card details

      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");

    }

  return (
    <div className='payment_container'>
        <h1>
            checkout {
                <Link to="/checkout">{basket?.length} items </Link>
            }
        </h1>

     {/** payment_delivery address */}

     <div className='payment_section'>
        <div className='payment_title'>
        <h3>Delivery Address</h3>
        </div>

        <div className='payment_address'>
         <p> {user?.email}</p>
         <p>Nairobi Lane</p>
         <p>Nairobi , Kenya</p>
        </div>
       
     </div>

     {/**payment section review items */}

     <div className='payment_section'>
        <div className='payment_title'>
            <h3>Review Items and delivery</h3>
        </div>
        <div className='payment_items'>
            {basket.map(item => (
                <CheckoutProduct
                id ={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))}
        </div>
     </div>

     {/**payment section method */}

     <div className='payment_section'>
        <div className='payment_title'>
            <h3>Payment Method</h3>
        </div>
        <div className='payment_details'>
            {/**Strip will go */}

            <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>

                <div className='payment_priceContainer'>
                 <CurrencyFormat
                   renderText={(value) => (
                      <h3>Order Total: {value}</h3>
                   )}
                   decimalScale={2}
                   value={getBasketTotal(basket)}
                   displayType={"text"}
                   thousandSeparator={true}
                   prefix={"$"}
                   />
                   <button disable={processing || disabled || succeeded} >
                    <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                   </button>
                </div>
                {/**Error */}
                {error && <div>(error)</div>}
            </form>

        </div>
     </div>
    </div>
  )
}

export default Payment
