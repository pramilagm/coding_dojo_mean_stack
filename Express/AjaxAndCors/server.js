const express = require("express");
const app = express();
const axios = require("axios");

app.use(
  express.urlencoded({
    extended: true
  })
);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
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
app.get("/people", function(req, res) {
  axios
    .get("http://swapi.co/api/people")
    .then(data => {
      console.log(data.data);
      res.json(data.data);
    })
    .catch(error => {
      // log the error before moving on!
      console.log(error);
      res.json(error);
    });
});
app.get("/planet", function(req, res) {
  axios
    .get("https://swapi.co/api/planets")
    .then(data => {
      console.log(data.data);
      res.json(data.data);
    })
    .catch(error => {
      // log the error before moving on!
      console.log(error);
      res.json(error);
    });
});

app.get("/", (request, response) => {
  response.render("index");
});

app.listen(8000, () => console.log("listening on port 8000"));
