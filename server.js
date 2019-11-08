/*=============================
          DEPENDENCIES
===============================*/
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const methodOverride = require("method-override");

/*=============================
               PORT
===============================*/
const PORT = process.env.PORT || 3000;

/*=============================
               DATABASE
===============================*/

const MONGOB_URI =
  process.env.MONGOB_URI || "mongodb://localhost:27017/jurnalfy";

/*=============================
        MONGOOSE CONNECTION
===============================*/
mongoose.connect(MONGOB_URI, {
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
