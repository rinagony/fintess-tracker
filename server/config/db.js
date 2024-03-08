const mongoose = require('mongoose');
const colors = require('colors'); 
require("dotenv").config(); 

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(process.env.MONGO_URI, 'process.env.MONGO_URI')

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;