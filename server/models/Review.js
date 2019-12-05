const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  content: { type: String, required: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Review", ReviewSchema);
