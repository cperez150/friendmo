const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoSchema = Schema({ image: String });

const Photos = mongoose.model("Photos", photoSchema);

module.exports = Photos;
