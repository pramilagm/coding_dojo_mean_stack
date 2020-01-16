const express = require("express");
const app = express();
const mongoose = require("mongoose");
const flash = require("express-flash");
const session = require("express-session");

app.use(flash());
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(
  session({
    secret: "keyboardkitteh",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000
    }
  })
);
mongoose.connect("mongodb://localhost/quote_db", {
  useNewUrlParser: true
});
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3
    },
    quote: {
      type: String,
      required: true,
      minlength: 6
    }
  },
  {
    timestamps: true
  }
);
const User = mongoose.model("User", UserSchema);
require("./server/config/routes.js")(app);
// create an object that contains methods for mongoose to interface with MongoDB

app.listen(8000, () => console.log("listening on port 8000"));
