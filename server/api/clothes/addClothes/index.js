const app = require("../../../util/configureApi");
const connectDB = require("../../../util/db");
const Clothes = require("../../../models/Cache");

app.put("*", (req, res) => {
  connectDB()
    .then(() => {
      const { _id } = req.query;

      if (!_id) {
        throw new Error("No document id specified.");
      }

      //   return Clothes.findOneAndUpdate(
      //     // increment log
      //     { _id },
      //     {
      //       $inc: { foundCount: 1 }
      //     },
      //     {
      //       useFindAndModify: true,
      //       new: true
      //     }
      //   );
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
