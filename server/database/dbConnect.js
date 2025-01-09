import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo is connected");
        
    } catch (error) {
        console.log(`connection failed due to this error ${error}`);
        
    }
}

export default connectDB;