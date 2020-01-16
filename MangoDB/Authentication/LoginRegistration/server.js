const express = require("express");
const app = express();
const mongoose = require("mongoose");
const flash = require("express-flash");
const session = require("express-session");
const bcrypt = require("bcryptjs");
app.use(flash());
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("trust proxy", 1); // trust first proxy
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
mongoose.connect("mongodb://localhost/mongoose_db", {
  useNewUrlParser: true
});
const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Posts must have a First name"]
    },
    last_name: {
      type: String,
      required: [true, "Posts must have a last_name"]
    },
    email: {
      type: String,
      required: [true, "Email cannot be empty"]
    },
    birthday: {
      type: Date,
      required: [true]
    },
    password: {
      type: String,
      required: [true, "Password cannot be empty"]
    }
  },
  {
    timestamps: true
  }
);

// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model("User", UserSchema);

//Rendering a index page
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/login", (req, res) => {
  //Compare to password
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user == null) {
      req.flash("reg", "No such User");
      res.redirect("/");
    } else {
      bcrypt.compare(req.body.password, user.password).then(result => {
        if (result) {
          req.session.user_id = user._id;
          res.redirect("/success");
        } else {
          req.flash("reg", "Wrong password");
          res.redirect("/");
        }
      });
    }
  });
});
//render to success page
app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/registration", (req, res) => {
  var error = false;
  const user = new User(req.body);
  if (!(req.body.email.includes("@") && req.body.email.includes("."))) {
    req.flash("reg", "Not an email!");
    error = true;
  }
  //Added an inner set of parenthesis here to make this work
  if (req.body.first_name.length <= 1) {
    req.flash("reg", "Please add more than one character to your first name");
    error = true;
  }

  //Added an inner set of parenthesis here to make this work
  if (!(req.body.last_name.length > 1)) {
    req.flash("reg", "Please add more than one character to your last name");
    error = true;
  }
  if (req.body.password != req.body.cpassword) {
    req.flash("reg", "Passwords don't match");
    error = true;
  }
  //Added an inner set of parenthesis here to make this work
  if (!(req.body.password.length > 5)) {
    req.flash("reg", "Password should have more than 5 characters");
    error = true;
  }
  var re = /[0-9]/;
  if (!re.test(req.body.password)) {
    req.flash("reg", "Password should contain a digit");
    error = true;
  }
  if (error) {
    res.redirect("/");
  } else {
    //Hash password (asynchronously)
    bcrypt.hash(req.body.password, 12).then(hash => {
      req.body.password_hash = hash;
      delete req.body.password;
      delete req.body.cpassword;
      //Create the user
      return req.body;
    });

    user
      .save()
      .then(user => {
        req.flash("reg", "User created! " + user.email);
        res.redirect("/");
      })
      .catch(err => {
        for (var key in err.errors) {
          req.flash("reg", err.errors[key].message);
        }
        res.redirect("/");
      });
  }
});

app.get("/success", (req, res) => {
  res.end("Success");
});
app.post("/logout", (req, res) => {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
});

app.listen(8000, () => console.log("listening on port 8000"));
