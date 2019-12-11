const mongoose = require("mongoose");

const TopsSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  type: { type: String, required: true },
  // img: { data: Buffer, contentType: String } // Buffer - store image as data in the form of arrays.
  img: { type: String, required: true }
});

module.exports = mongoose.model("tops", TopsSchema);
