const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51PjQ6bRpAOqKeKpZvnY9w5097QRWKG7kaThFVWsHyMHLrNO9KSEQMcncXuQJYiTRnE9a5v7lNQgfuvmDyCt5OVaW00nuSPleGk');

// APP CONFIG
const app = express();

// MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTES
app.get('/', (req, res) => res.status(200).send('Hello Joe'));

// POST route for creating a PaymentIntent
app.post('/payments/create', async (req, res) => {
    const total = parseInt(req.query.total); // Ensure the total is in cents and an integer

    console.log("Payment received, BOOM!!!! Total: ", total);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total, // Amount in cents
            currency: "usd",
        });

        res.status(201).send({
            clientSecret: paymentIntent.client_secret, // Corrected from clientSecret to client_secret
        });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).send({
            error: 'Payment failed',
        });
    }
});

// LISTEN COMMAND
exports.api = functions.https.onRequest(app);

// Example endpoint URL for testing:
// http://127.0.0.1:5001/clone-dda1b/us-central1/api
