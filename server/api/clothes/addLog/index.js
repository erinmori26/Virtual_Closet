const app = require("../../../util/configureApi");
const connectDB = require("../../../util/db");
const logged = require("../../../models/logged");

app.put("*", (req, res) => {
  connectDB()
    .then(() => {
      return logged.findOneAndUpdate({
        $inc: { count: 1 }
      });

      // return logged.findOne();

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
