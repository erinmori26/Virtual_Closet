const mongoose = require("mongoose");

const ClothesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { data: Buffer, contentType: String } // Buffer - store image as data in the form of arrays.
});

module.exports = mongoose.model("Clothes", ClothesSchema);
