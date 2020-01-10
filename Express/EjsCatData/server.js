const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));
app.get("/", (request, response) => {
    response.send("Cars&&Cats");
});
app.get("/cats", (request, response) => {
    response.render('cats');
});
app.get("/cuddle", (request, response) => {
    var cat_info = [{
        name: "Micky",
        img: "cat1.jpg",
        age: 3,
        sleeping_spot: ["under the bed", "in a sunbeam"]
    }, ];
    response.render('catInfo', {
        cat: cat_info
    })


});
app.get("/cuddle1", (request, response) => {
    var cat_info = [{
        name: "Spagheti",
        img: "cat2.jpg",
        age: 2,
        sleeping_spot: ["Under the Table", "on the table"]
    }, ];
    response.render('catInfo', {
        cat: cat_info
    })


});
app.listen(8000, () => console.log("listening on port 8000"));