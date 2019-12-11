const mongoose = require("mongoose");

const LoggedSchema = new mongoose.Schema({
  // title: { type: String, required: true },
  // img: { data: Buffer, contentType: String } // Buffer - store image as data in the form of arrays.
  count: { type: Number, default: 0 }
});

module.exports = mongoose.model("logged", LoggedSchema);
