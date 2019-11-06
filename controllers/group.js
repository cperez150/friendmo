/*=============================
          DEPENDENCIES
===============================*/
const express = require("express");
const router = express.Router();

const Group = require("../models/group.js");

/*=============================
            ROUTES
===============================*/

//JSON
router.get("/json", (req, res) => {
  Group.find({}, (err, allData) => {
    res.send(allData);
  });
});

// router.get("/seed", async (req, res) => {
//   const newGroup = [
//     {
//       admin: "Carmen",
//       friends: ["Sarah", "Paulina"],
//       destination: {
//         city: "Tampa",
//         country: "Florida"
//       },
//       duration: 3,
//       cost: [
//         {
//           name: "Bone Fish Grill",
//           date: "2/4/19",
//           expense: "Drinks",
//           cost: "95.40"
//         }
//       ],
//       groupKey: "123Group"
//     }
//   ];
//   try {
//     const seedItems = await Group.create(newGroup);
//     res.send(seedItems);
//   } catch (err) {
//     res.send(err.message);
//   }
// });

// router.delete("/", (req, res) => {
//   req.session.destroy(() => {
//     res.redirect("/");
//   });
// });

/*=============================
            EXPORT
===============================*/
module.exports = router;
