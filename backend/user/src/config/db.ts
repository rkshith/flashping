import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    const url = process.env.MONGO_URI || 'mongodb://localhost:27017/userdb';
     
    if(!url) {
        console.error('MongoDB connection string is not defined in environment variables.');
        process.exit(1);
    }
    try {
        await mongoose.connect(url, {
            dbName: ' Chatappmicroserviceapp',
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

export default connectDB;