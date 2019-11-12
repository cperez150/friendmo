// //photostuff
// /*=============================
//           DEPENDENCIES
// ===============================*/
// const express = require("express");
// const router = express.Router();
// const Photos = require("../models/photos.js");
// const User = require("../models/users.js");
// // const Journal = require("../models/journal.js");

// const multer = require("multer");
// const cloudinary = require("cloudinary");
// const cloudinaryStorage = require("multer-storage-cloudinary");

// cloudinary.config({
//   cloud_name: "jurnalfy-com",
//   api_key: "744398222415881",
//   api_secret: "PNfM3CLmpn3UP2cKWyQ81Zy9Mrc"
// });

// const storage = cloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: "jurnalfy",
//   allowedFormats: ["jpg", "png"],
//   transformation: [{ width: 500, height: 500, crop: "limit" }]
// });

// const parser = multer({ storage: storage });

// /*=============================
//             ROUTES
// ===============================*/
// router.get("/photo", (req, res) => {
//   res.render("users/new.ejs");
// });

// router.post("/photo", parser.single("image1"), (req, res) => {
//   // console.log(req.body);
//   // console.log(req.file);
//   User.find;
//   const image = {};
//   imageURL = req.file.url;
//   imagePublicId = req.file.public_id;

//   Photos.create(image).then(newImage => {
//     res.json(newImage);
//   });

//   // .catch(err => console.log(err));
// });

// // console.log(image);
// // if (res.json) {
// //   Journal.find({}, (err, allEntries) => {
// //     if (err) {
// //       console.log("Entry error: ", err);
// //     } else {
// //       res.render("home.ejs", {
// //         Journal: allEntries
// //       });
// //     }
// //   });
// // }

// // /*=============================
// //             EXPORT
// // ===============================*/
// module.exports = router;
