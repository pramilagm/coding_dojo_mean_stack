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
        cookie: {
            maxAge: 60000
        }
    })
);
mongoose.connect("mongodb://localhost/mongoose_db", {
    useNewUrlParser: true
});
const MongoseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    home: {
        type: String,
        required: true,
        minlength: 3
    },
    des: {
        type: String,
        required: true,
        minlength: 6
    },
    max_age: {
        type: Number
    }
}, {
    timestamps: true
});
// create an object that contains methods for mongoose to interface with MongoDB
const Mongoose = mongoose.model("User", MongoseSchema);
//Rendering a index page
app.get("/", (req, res) => {
    Mongoose.find()
        .then(data =>
            res.render("index", {
                mongooses: data
            })
        )
        .catch(err => res.json(err));
});
//render it to a showOne page with a id 
app.get("/mongooses/show/:id", (req, res) => {
    console.log(req.params.id)

    Mongoose.findById(req.params.id)
        .then(data => {
            console.log(data)
            res.render("showOne", {
                mongoose: data
            })
        })
        .catch(err => res.json(err));
});
//Post method for creating a new mongoose
app.post("/mongooses", (req, res) => {
    const mon = new Mongoose();
    mon.name = req.body.name;
    mon.home = req.body.home;
    mon.des = req.body.des;
    mon.max_age = req.body.max_age;

    mon
        .save()
        .then(() => res.redirect("/"))
        .catch(err => {
            console.log("We have an error!", err);
            // For flash messages
            for (var key in err.errors) {
                req.flash("registration", err.errors[key].message);
            }
            res.redirect("/");
        });
});
//creating a new Mongoose 
app.get("/mongooses/new", (req, res) => {
    res.render("new")


});
// Rendering  edit page new one
app.get("/mongooses/edit/:id", (req, res) => {
    Mongoose.findByIdAndUpdate(req.params.id)
        .then(data =>
            res.render("edit", {
                mongoose: data
            })
        )
        .catch(err => res.json(err));
});
app.post('/mongooses/:id', (req, res) => {
    Mongoose.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        })
        .then(data => {
            res.redirect('/');
        })
        .catch(err => res.json(err));
});
//Destroy
app.get('/mongooses/destroy/:id', (req, res) => {
    Mongoose.findByIdAndRemove(req.params.id, "")
        .then(data => {
            res.redirect('/');
        })
        .catch(err => res.json(err));
});

app.listen(8000, () => console.log("listening on port 8000"));