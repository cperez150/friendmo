/*=============================
          DEPENDENCIES
===============================*/
const express = require("express");
const router = express.Router();

const User = require("../models/users.js");
const Journal = require("../models/journal.js");

let currentUser = "";
/*=============================
            ROUTES
===============================*/

//landing page
router.get("/", (req, res) => {
  res.render("landing.ejs");
});

//login page for registered Users
router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

//GET register user page for new Users
router.get("/register", (req, res) => {
  res.render("users/register.ejs");
});

//POST register for new Users
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

/* =================================
          NEW JOURNAL ENTRY
==================================*/
//Add New Thought to Journal
router.get("/newthought", (req, res) => {
  res.render("users/new.ejs");
});

router.post("/newThought", (req, res) => {
  req.body.userName = currentUser;
  Journal.create(req.body, (err, newEntry) => {
    if (err) {
      console.log(err);
    } else {
      console.log(newEntry);
      Journal.find({ userName: req.body.userName }, (err, allEntries) => {
        if (err) {
          console.log("Entry error: ", err);
        } else {
          currentUser = req.body.userName;
          res.render("home.ejs", {
            Journal: allEntries
          });
        }
      });
    }
  });
});

/* =================================
          UPDATE JOURNAL ENTRY
==================================*/

// //EDIT (GET)
// router.get("/:id/edit", (req, res) => {
//   Product.findById(req.params.id, (err, getProduct) => {
//     if (err) {
//       res.send(err);
//     }
//     res.render("edit.ejs", { Product: getProduct });
//   });
// });

// //UPDATE (EDIT = PUT)
// router.put("/:id", (req, res) => {
//   Product.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true },
//     (err, updatedProduct) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.redirect("/products");
//       }
//     }
//   );
// });

/* =================================
          SHOW INDIVIDUAL ENTRY
==================================*/
router.get("/:id", (req, res) => {
  Journal.findById(req.params.id, (err, Journal) => {
    res.render("users/show.ejs", {
      Journal: Jouornal
    });
  });
});

/* =================================
   SIGNIN VERICATION AND HOME PAGE
==================================*/

router.post("/home", (req, res) => {
  console.log("sent", req.body);

  User.findOne({ userName: req.body.userName }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else if (req.body.password === foundUser.password) {
      if (err) {
        console.log(err);
      } else {
        Journal.find({ userName: req.body.userName }, (err, allEntries) => {
          if (err) {
            console.log("Entry error: ", err);
          } else {
            currentUser = req.body.userName;
            res.render("home.ejs", {
              Journal: allEntries,
              User: foundUser
            });
          }
        });
      }
    }
  });
});

/*=============================
            EXPORT
===============================*/
module.exports = router;
