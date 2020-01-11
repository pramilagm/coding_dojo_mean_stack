const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(
  express.urlencoded({
    extended: true
  })
);
const session = require("express-session");
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

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/result", (req, res) => {
  /* const form_data = req.body.input  */
  req.session.form_data = {
    name: req.body.name,
    loc: req.body.location,
    lang: req.body.language,
    comment: req.body.comment
  };
  res.end();
  res.redirect("/display");
});

app.get("/display", (req, res) => {
  res.render("display", req.session.form_data);
});

/*
The submitted form gets sent to /result
 The server recognizes when someone posts things to /result, grabs information from the POST, and sends the POST data back as it renders views/results.ejs
*/

app.listen(8000, () => console.log("listening on port 8000"));
