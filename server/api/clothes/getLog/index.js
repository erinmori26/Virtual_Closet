const app = require("../../../util/configureApi");
const connectDB = require("../../../util/db");
const logged = require("../../../models/logged");

app.get("*", (req, res) => {
  connectDB()
    .then(() => {
      return logged.find();
    })
    .then(cacheItem => {
      res.status(200).json({
        result: cacheItem
      });
    })
    .catch(error => {
      res.status(error.statusCode || 500).json({
        error: error.message
      });
    });
});

module.exports = app;
