const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  title: String,
  image: String
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
