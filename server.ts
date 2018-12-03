import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const DB_URI = process.env.DB_URI_STOCKWATCH as string;

// Cloud MongoDB connection, via URI in .env file
mongoose.connect(DB_URI);

export { mongoose };