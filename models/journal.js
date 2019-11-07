const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = Schema({
  userName: String,
  date: String,
  thought: String,
  category: String
});

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;
