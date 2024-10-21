


import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://jhoelleh:jhoelleh@cluster0.jk9yr0b.mongodb.net/Food_Website', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};
 export { connectDB };


//mongodb+srv://joellembithi:41351260@cluster0.xfn2ebt.mongodb.net/FoodWebSite
//41351260
//mongodb+srv://joellembithi:jhoelleh@cluster0.vevsc8l.mongodb.net/?
//197.211.8.202/32
//FOOD_ORDERING_PLATFORM
//mongodb://atlas-sql-6688e1c1f1461a4572bddb27-zh56l.a.query.mongodb.net/FOOD_ORDERING_PLATFORM?ssl=true&authSource=admin

//mbithi
//mongodb+srv://joellembithi:jhoelleh@cluster0.jk9yr0b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0