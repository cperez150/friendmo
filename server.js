/*=============================
          DEPENDENCIES
===============================*/
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const methodOverride = require("method-override");



/*=============================
        MONGOOSE CONNECTION
===============================*/
mongoose.connect("mongodb://localhost:27017/jurnalfy", {
  useNewUrlParser: true
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

/*=============================
            CONTROLLERS
===============================*/
const usersController = require("./controllers/users.js");
const journalController = require("./controllers/journal.js");
const photoController = require("./controllers/photo.js");

/*=============================
          MIDDLEWARE
===============================*/
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
//user controller
app.use("/", usersController);
app.use("/journal", journalController);
app.use("/photo", photoController);

/*=============================
          LISTENER
===============================*/

app.listen(port, () => console.log("running on 3000"));
