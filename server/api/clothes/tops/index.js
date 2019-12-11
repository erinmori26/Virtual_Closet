const app = require("../../../util/configureApi");
const connectDB = require("../../../util/db");
const tops = require("../../../models/tops");

app.get("*", (req, res) => {
  connectDB()
    .then(() => {
      return tops.find();
    })
    .then(result => {
      res.status(200).json({
        // send back json from request
        result
      });
    })
    .catch(error => {
      res.status(error.statusCode || 500).json({
        error: error.message
      });
    });
});

module.exports = app;
