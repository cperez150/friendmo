const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = Schema({
  userName: String,
  date: String,
  thought: String,
  destination: { type: String, default: "Add destination" },
  location: { type: String, default: "Add Image" },
  image: { type: String, default: "Add Image" }
});

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;
