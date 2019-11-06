/*=============================
          DEPENDENCIES
===============================*/
const express = require("express");
const router = express.Router();

const User = require("../models/users.js");
const Group = require("../models/group");
/*=============================
            ROUTES
===============================*/

router.get("/", (req, res) => {
  res.render("landing.ejs");
});

router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

router.get("/register", (req, res) => {
  res.render("users/register.ejs");
});

router.post("/newUser", (req, res) => {
  console.log("Sent", req.body);
  User.create(req.body, (err, newUser) => {
    if (err) {
      console.log("Create Error", err);
    } else {
      console.log("Created", newUser);
      res.redirect("/login");
    }
  });
});

router.post("/home", (req, res) => {
  console.log("sent", req.body);
  User.findOne({ userName: req.body.userName }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else if (req.body.password === foundUser.password) {
      Group.find({}, (err, allGroups) => {
        if (err) {
          console.log("Group find error: ", err);
        } else {
          if (Group.admin === foundUser.name) {
            const admin = true;
            res.render("home.ejs", {
              Group: allGroups,
              User: foundUser
            });
          } else {
            res.render("home.ejs", {
              Group: allGroups,
              User: foundUser
            });
          }
        }
      });
    } else {
      res.redirect("/login");
    }
  });
});

/*=============================
            EXPORT
===============================*/
module.exports = router;
