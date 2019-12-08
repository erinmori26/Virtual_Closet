const app = require("../../../util/configureApi");
const connectDB = require("../../../util/db");
const Clothes = require("../../../models/Cache");

app.get("*", (req, res) => {
  connectDB()
    .then(() => Clothes.find())
    .then(cacheItems => {
      res.status(200).json({
        // send back json from request
        result: cacheItems
      });
    })
    .catch(error => {
      res.status(error.statusCode || 500).json({
        error: error.message
      });
    });
});

module.exports = app;
