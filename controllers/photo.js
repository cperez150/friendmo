// /*=============================
//           DEPENDENCIES
// ===============================*/
// const express = require("express");
// const router = express.Router();
// const Photo = require("../models/photos.js");
// const User = require("../models/users.js");

// //PHOTOSTUFF
// cloudinary.config({
//   cloud_name: "jurnalfy - com",
//   api_key: "744398222415881",
//   api_secret: "PNfM3CLmpn3UP2cKWyQ81Zy9Mrc"
// });

// const storage = cloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: "jurnalfy",
//   allowedFormats: ["jpg", "png"],
//   transformation: [{ width: 500, height: 500, crop: "limit" }]
// });

// router.get("/photo", (req, res) => {
//   res.render("users/test.ejs");
// });

// router.post("/photo", parser.single("image"), (req, res) => {
//   console.log(req.file); // to see what is returned to you
//   const Photo = {};
//   Photo.url = req.file.url;
//   Photo.id = req.file.public_id;
//   Photo.create(Photo) // save image information in database
//     .then(newPhoto => res.json(newPhoto))
//     .catch(err => console.log(err));
// });

// /*=============================
//             EXPORT
// ===============================*/
// module.exports = router;
