const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  userName: String,
  name: String,
  password: String,
  groups: []
});

const User = mongoose.model("User", userSchema);

module.exports = User;
