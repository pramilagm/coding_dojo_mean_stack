const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
const server = app.listen(8000);
const io = require("socket.io")(server);

app.use(express.urlencoded({
    extended: true
}));
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}))
var counter = 1;


app.get("/", (req, res) => {

    res.render("index");
});
// create server's connection listener to run, and this occurs for every new socket connection
io.on("connection", function (socket) {
    //2

    //server listens to "counter" event


    socket.on('counter', function () {
        counter++;
        socket.emit('count-update', {
            count: counter,
        });

    })
    socket.on('reset', function () {
        counter = 0;
        socket.emit('reset-update', {
            counter: counter,
        });

    })

    // socket.emit("random-number", {
    //     response: random_number
    // });
});