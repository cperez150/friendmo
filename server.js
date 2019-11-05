/*=============================
          DEPENDENCIES
===============================*/
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();
const port = 3000;
const methodOverride = require("method-override");

/*=============================
        MONGOOSE CONNECTION
===============================*/
mongoogse.connection.once("open", () => {
  console.log("connected to mongo");
});

/*=============================
            CONTROLLERS
===============================*/

/*=============================
          MIDDLEWARE
===============================*/

/*=============================
            LISTEN
===============================*/
app.listen(port, () => {
  console.log("listening on port ", port);
});
