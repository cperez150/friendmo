/*=============================
          DEPENDENCIES
===============================*/
const express = require("express");
const router = express.Router();
const Photo = require("../models/photos.js");
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

//landing page
router.get("/home", (req, res) => {
  Journal.find({ userName: currentUser }, (err, allEntries) => {
    if (err) {
      console.log("Entry error: ", err);
    } else {
      res.render("home.ejs", {
        Journal: allEntries
      });
    }
  });
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

//EDIT (GET)
router.get("/:id/edit", (req, res) => {
  Journal.findById(req.params.id, (err, entryData) => {
    if (err) {
      res.send(err);
    }
    res.render("users/edit.ejs", { Journal: entryData });
  });
});

//UPDATE (EDIT = PUT)
router.put("/:id", (req, res) => {
  Journal.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedEntry) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect(`/${req.params.id}`);
      }
    }
  );
});

// ///PHOTO STUFF BELOW
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "jurnalfy - com",
  api_key: "744398222415881",
  api_secret: "PNfM3CLmpn3UP2cKWyQ81Zy9Mrc"
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "jurnalfy",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
});

router.get("/photo", (req, res) => {
  res.render("users/test.ejs");
});

const parser = multer({ storage: storage });

router.post("/photo", parser.single("image"), (req, res) => {
  console.log(req.file); // to see what is returned to you
  const image = {};
  image.url = req.file.url;
  image.id = req.file.public_id;

  Photo.create(image)
    .then(newImage => res.json(newImage))
    .catch(err => console.log(err)); // save image information in database
});
// ///////////////////

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
/* =================================
        SHOW INDIVIDUAL ENTRY
==================================*/
router.get("/:id", (req, res) => {
  Journal.findById(req.params.id, (err, Journal) => {
    res.render("users/show.ejs", {
      Journal: Journal
    });
  });
});

/* =================================
          DELETE ENTRY
==================================*/
router.delete("/:id", (req, res) => {
  Journal.findByIdAndRemove(req.params.id, (err, deletedEntry) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/home");
    }
  });
});

/*=============================
            EXPORT
===============================*/
module.exports = router;
