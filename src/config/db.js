const mongoose = require('mongoose');
const { DB_URI } = require('./appConfig'); // Make sure to have the URI in your config file
const adminRoutes = require('../routes/admin.routes')



async function connect() {
  try {
    await mongoose.connect("mongodb+srv://sssutms:sssutms@cluster0.xcg0xyu.mongodb.net/", {
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if DB connection fails
  }
}

module.exports = { connect };