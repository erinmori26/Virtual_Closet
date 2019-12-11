const connectDB = require("../util/db");
const tops = require("../models/tops");
const bottoms = require("../models/bottoms");
const logged = require("../models/logged");

const t = require("./tops");
const b = require("./bottoms");
const c = require("./logged");

const seed = () => {
  connectDB()
    .then(() =>
      Promise.all([
        tops.deleteMany(),
        bottoms.deleteMany(),
        logged.deleteMany()
      ])
    )
    // .then(() => {
    //   return tops.find().estimatedDocumentCount();
    // })
    .then(() => {
      return tops.create(t); // create multiple docs
    })
    .then(() => {
      return bottoms.create(b);
    })
    .then(() => {
      return logged.create(c);
    })
    .then(() => console.log("DB Seeded."))
    .catch(error => {
      console.log("Error while seeding database", error);
    })
    .finally(() => process.exit());
};

seed();
