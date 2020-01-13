const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
const server = app.listen(8000);
const io = require("socket.io")(server);

app.use(express.urlencoded({
    extended: true
}));
var color = "";


app.get("/", (req, res) => {

    res.render("index");
});
// create server's connection listener to run, and this occurs for every new socket connection
io.on("connection", function (socket) {
    socket.emit('launch', {
        bgc: color,

    })
    socket.broadcast.emit('launch', {
        bgc: color,
    })

    //2
    socket.on('green-color', function (data) {
        socket.emit('green', {
            bgc: "green"
        });
        socket.broadcast.emit('green', {
            bgc: "green"
        });


    });
    socket.on('blue-push', function (data) {
        socket.emit('blue', {
            bgc: "rgb(0,0,255)"
        })
        socket.broadcast.emit('blue', {
            bgc: "rgb(0,0,255)"
        });
    })
    socket.on('pink-push', function (data) {
        socket.emit('pink', {
            bgc: "rgb(255,193,204)"
        })
        socket.broadcast.emit('pink', {
            bgc: "rgb(255,193,204)"
        });

    })


});