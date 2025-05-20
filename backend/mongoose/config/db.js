const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/chess_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    // You might want to implement a more robust error handling strategy
    // in a production application, such as retries.
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

