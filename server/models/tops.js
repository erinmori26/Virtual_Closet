const mongoose = require("mongoose");

const TopsSchema = new mongoose.Schema({
  // title: { type: String, required: true },
  // img: { data: Buffer, contentType: String } // Buffer - store image as data in the form of arrays.
  img: { type: String, required: true }
});

module.exports = mongoose.model("Tops", TopsSchema);
