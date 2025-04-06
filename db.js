const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  try {
    console.log('Connected to MongoDB');
  }
  catch(error){
    console.error('Error connecting to MongoDB:', error);
  };
  
  const db = mongoose.connection;
  db.on('error', (error) => {
      console.error('MongoDB connection error:', error);
  });
  db.once('open', () => {
      console.log('Connected to MongoDB');
  });
  db.on('disconnected', () => {
      console.log('Disconnected from MongoDB');
  });
  

  module.exports = db;