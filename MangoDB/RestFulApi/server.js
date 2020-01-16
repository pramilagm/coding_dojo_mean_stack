const express = require("express");
const app = express();
const mongoose = require("mongoose");
const flash = require("express-flash");
const session = require("express-session");

app.use(flash());
app.use(express.static(__dirname + "/client/static"));
app.set("views", __dirname + "/client/views");
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
mongoose.connect("mongodb://localhost/tasks_db", {
    useNewUrlParser: true
});
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);
// create an object that contains methods for mongoose to interface with MongoDB

app.listen(8000, () => console.log("listening on port 8000"));