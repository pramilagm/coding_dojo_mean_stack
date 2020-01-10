const express = require("express");
const app = express();
app.get("/", (request, response) => {
    response.send("Cars&&Cats");
});
app.get("/cars", (request, response) => {
    response.render('cars');
});
app.get("/cars/new", (request, response) => {
    response.render('form');
});

app.get("/cats", (request, response) => {
    response.render('cats');
});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));

app.listen(8000, () => console.log("listening on port 8000"));