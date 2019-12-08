const connectDB = require("../util/db");
const Clothes = require("../models/clothes");

const data = require("./data");

const seed = () => {
  connectDB()
    .then(() => {
      return Clothes.find().estimatedDocumentCount();
    })
    .then(() => {
      return Clothes.create(data); // create multiple docs from data.js
    })
    .then(() => console.log("DB Seeded."))
    .catch(error => {
      console.log("Error while seeding database", error);
    })
    .finally(() => process.exit());
};

seed();
