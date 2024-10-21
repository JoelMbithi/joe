import mongoose from 'mongoose';

// Enable Mongoose debugging mode
mongoose.set('debug', true);

const testConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://joellembithi:jhoelleh@cluster0.vevsc8l.mongodb.net/Food_Odering_Platform', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            retryWrites: true,
            w: 'majority'
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit process with failure
    }
};

testConnection();
clearImmediate