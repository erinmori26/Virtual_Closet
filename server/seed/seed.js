const connectDB = require("../util/db");
const tops = require("../models/tops");
const bottoms = require("../models/bottoms");

const t = require("./tops");
const b = require("./bottoms");

const seed = () => {
  connectDB()
    .then(() => Promise.all([tops.deleteMany(), bottoms.deleteMany()]))
    // .then(() => {
    //   return tops.find().estimatedDocumentCount();
    // })
    .then(() => {
      return tops.create(t); // create multiple docs from data.js
    })
    .then(() => {
      return bottoms.create(b); // create multiple docs from data.js
    })
    .then(() => console.log("DB Seeded."))
    .catch(error => {
      console.log("Error while seeding database", error);
    })
    .finally(() => process.exit());
};

seed();
