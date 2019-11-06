const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = Schema({
  admin: String,
  friends: [],
  destination: {
    city: String,
    country: String
  },
  duration: Number,
  cost: [
    {
      name: String,
      date: String,
      expense: String,
      cost: String
    }
  ],
  groupKey: String
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
