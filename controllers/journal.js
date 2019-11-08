/*=============================
          DEPENDENCIES
===============================*/
const express = require("express");
const router = express.Router();

const Journal = require("../models/journal.js");
const User = require("../models/users.js");

/*=============================
            ROUTES
===============================*/

//JSON
router.get("/json", (req, res) => {
  Journal.find({}, (err, allData) => {
    res.send(allData);
  });
});

router.get("/seed", async (req, res) => {
  const newEntries = [
    {
      userName: "cperez7",
      date: "01/12/12",
      thought: "random things and random thoughts",
      category: "thoughts"
    },
    {
      userName: "cperez7",
      date: "12/20/12",
      thought: "random things 2",
      category: "thoughts"
    },
    {
      userName: "test",
      date: "12/20/12",
      thought: "random things 2",
      category: "thoughts"
    }
  ];

  try {
    const seedItems = await Journal.create(newEntries);
    res.send(seedItems);
  } catch (err) {
    res.send(err.message);
  }
});

router.delete("/", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

/*=============================
            EXPORT
===============================*/
module.exports = router;
