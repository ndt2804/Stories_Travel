import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import useRoutes from '../routes/useRoutes'

dotenv.config();

const app = express()
app.use(express.json());

async function connect() {
    try {
        const mongooseUri = process.env.MONGOOSE_URI;
        if (!mongooseUri) {
            console.log('MONGOOSE_URI is not set.');
            return;
        }
        await mongoose.connect(mongooseUri);

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port: ${process.env.PORT}`);
        });

        console.log('Connected!');
    } catch (error) {
        console.log('Something wrong:', error);
    }
}

connect();

useRoutes(app);