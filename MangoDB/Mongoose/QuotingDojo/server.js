const express = require("express");
const app = express();
const mongoose = require("mongoose");
const flash = require("express-flash");
const session = require("express-session");
app.use(flash());
app.use(express.static(__dirname + "/static"));
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
    cookie: { maxAge: 60000 }
  })
);
mongoose.connect("mongodb://localhost/dojo_quote_db", {
  useNewUrlParser: true
});
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3 },
    quote: { type: String, required: true, minlength: 6 }
  },
  { timestamps: true }
);
// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model("User", UserSchema);

app.get("/", (req, res) => {
  User.find()
    .then(data =>
      res.render("index", {
        users: data
      })
    )
    .catch(err => res.json(err));
});
app.post("/quotes", (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.quote = req.body.quote;
  user
    .save()
    .then(() => res.redirect("/quotes"))
    .catch(err => {
      console.log("We have an error!", err);
      // For flash messages
      for (var key in err.errors) {
        req.flash("registration", err.errors[key].message);
      }
      res.redirect("/");
    });
});
app.get("/quotes", (req, res) => {
  User.find()
    .sort("-createdAt")
    .then(data =>
      res.render("showQuote", {
        users: data
      })
    )
    .catch(err => res.json(err));
});
app.listen(8000, () => console.log("listening on port 8000"));
