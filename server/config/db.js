const mongoose = require('mongoose');
const database = 'mongodb://localhost/online-house-selling'

mongoose.connect(database)

mongoose.connection.on('connected',()=>{
  console.log("Database Connected ", database);
})

mongoose.connection.on('error',()=>{
  console.log("Database error ", database);
})

mongoose.connection.on('disconnected',()=>{
  console.log("Database disconnected ", database);
})

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose connection disconnected, app termination');
    process.exit(0);
  });
});
