const app = require("../../util/configureApi");
const Clothes = require("../../models/clothes");
const connectDB = require("../../util/db");

// Here, we create an instance of our Item model, and save the attributes of img.data and img.contentType.
// The img.data key will have a value of the image data, which will be an array of numbers representing our actual image.
// The img.contentType key specifies that we specifically have a png file.
// Finally, calling the .save() method will save this instance of our Item to our database.
// If you check your database find img.data as <Binary Data>

app.post("*", (req, res) => {
  connectDB()
    .then(() => {
      // var newItem = new Item();
      // newItem.img.data = fs.readFileSync(req.files.userPhoto.path);
      // newItem.img.contentType = "image/png";
      // newItem.save();

      // return Clothes.create(req.body); // takes in body of request
      return Clothes.create(req.body);
    })
    .then(cacheItem => {
      res.status(200).json({
        // send result
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
