const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
let isConnected;

const DB_URL =
  "mongodb+srv://erinmori26:<PASSWORD>@cluster0-ds4lf.mongodb.net/VC1?retryWrites=true&w=majority";

const connectToDatabase = () => {
  if (isConnected) {
    console.log("Use existing database connection.");
    return Promise.resolve();
  }

  console.log("Using new database connection.");
  return mongoose.connect(DB_URL, { useNewUrlParser: true }).then(db => {
    isConnected = db.connections[0].readyState;
  });
};

module.exports = connectToDatabase;
