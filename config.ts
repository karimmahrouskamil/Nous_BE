import mongoose, { ConnectOptions } from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/NousDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions); 
    console.info("*****************************************************************************"); 
    console.info(`**               MongoDB connected' - listening on 27017                   **`); 
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
