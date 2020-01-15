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
const CommentSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: [true, "Posts must have a title"]
    },
    comment: {
        type: String,
        required: [true, "Posts must have a title"]
    },

}, {
    timestamps: true
})
const MessageSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: [true, "Posts must have a title"]
    },
    message: {
        type: String,
        required: [true, "Posts must have a title"]
    },
    comments: [CommentSchema],
}, {
    timestamps: true
})
// create an object that contains methods for mongoose to interface with MongoDB
const Message = mongoose.model("Message", MessageSchema);
const Comment = mongoose.model("Comment", CommentSchema);

//Rendering a index page
app.get("/", (req, res) => {
    Message.find()
        .then(data =>
            res.render("index", {
                messages: data,
            })
        )
        .catch(err => res.json(err));
});

app.post("/messages", (req, res) => {
    const mes = new Message(req.body);
    // mes.comment = req.body.comment
    mes
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
app.post("/comments/:id", (req, res) => {
    var id = req.params.id
    const comment = new Comment(req.body);
    comment.save()
        .then((data) => {
            return Message.findOneAndUpdate({
                _id: id
            }, {
                $push: {
                    comments: data
                }
            })
        })
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



//Destroy
app.get('/mongooses/destroy/:id', (req, res) => {
    Mongoose.findByIdAndRemove(req.params.id, "")
        .then(data => {
            res.redirect('/');
        })
        .catch(err => res.json(err));
});

app.listen(8000, () => console.log("listening on port 8000"));