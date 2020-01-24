const express = require("express");
const app = express();
const mongoose = require("mongoose");
const flash = require("express-flash");
const bodyParser = require('body-parser');
app.use(flash());
app.use(express.static(__dirname + '/public/dist/public'));
app.use(
    express.urlencoded({
        extended: true
    })
);
mongoose.connect("mongodb://localhost/authors_db", {
    useNewUrlParser: true
});
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
// create an object that contains methods for mongoose to interface with MongoDB

app.listen(8000, () => console.log("listening on port 8000"));