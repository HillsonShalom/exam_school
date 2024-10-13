import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        const conString = process.env.CONNECTION_STRING
        await mongoose.connect(conString!)
        console.log('Successfully connected to MongoDB!');
    } catch(err) {
        const error = err as Error
        console.error(error.message)
    }
}