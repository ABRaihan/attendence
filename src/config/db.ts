import mongoose from 'mongoose';


export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/attendance');
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.log('Error connection to MongoDB', (error as Error).message);
    process.exit(1);
  }
};
