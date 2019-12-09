const express = require("express");
const helmet = require("helmet");
const moment = require("moment");
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// use Multer to take a photo and put it in a folder called 'uploads' for later access
// app.use(
//   multer({
//     dest: "../uploads/",
//     rename: function(fieldname, filename) {
//       return filename;
//     }
//   })
// );

module.exports = app;
