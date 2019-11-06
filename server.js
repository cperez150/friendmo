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
mongoose.connect("mongodb://localhost:27017/friendmo", {
  useNewUrlParser: true
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

/*=============================
            CONTROLLERS
===============================*/
const usersController = require("./controllers/users.js");
const groupController = require("./controllers/group.js");

/*=============================
          MIDDLEWARE
===============================*/
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
//user controller
app.use("/", usersController);
app.use("/group", groupController);

/*=============================
          LISTENER
===============================*/

app.listen(port, () => console.log("running on 3000"));
