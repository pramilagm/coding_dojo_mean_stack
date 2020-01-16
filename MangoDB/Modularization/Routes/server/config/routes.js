const mongoose = require("mongoose");
const User = mongoose.model("User");
module.exports = function(app) {
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
};
