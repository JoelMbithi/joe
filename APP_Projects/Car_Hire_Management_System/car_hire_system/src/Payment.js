import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load your Stripe public key (replace 'your_public_key' with your actual Stripe key)
const stripePromise = loadStripe('pk_test_51PjQ6bRpAOqKeKpZfmvxxbYgVNO3dp27GOJP9ITxC9naNbJh6pjFzIbGqvAFvvIAyOSws3JlveZD2WaqqKs8MC3e00zjG7Q3EJ');

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Get card details from CardElement
    const cardElement = elements.getElement(CardElement);

    // Create a payment method with Stripe
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentStatus(error.message);
    } else {
      // Send paymentMethod.id to the server to create a payment intent
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: 1000, // Amount in cents ($10.00)
        }),
      });

      const paymentResponse = await response.json();

      if (paymentResponse.success) {
        setPaymentStatus('Payment successful!');
      } else {
        setPaymentStatus(paymentResponse.message);
      }
    }
  };

  return (
    <div>
      <h1>Simple Payment</h1>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>Pay $10.00</button>
      </form>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

// Wrap the payment form with the Stripe Elements provider
const App = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default App;
