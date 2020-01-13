const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
const server = app.listen(8000);
const io = require("socket.io")(server);
var users = {};
var id = 0;
var messages = {};

app.use(express.urlencoded({
    extended: true
}));
app.get("/", (req, res) => {

    res.render("index");
});
// create server's connection listener to run, and this occurs for every new socket connection
io.on("connection", function (socket) {
    console.log("Connected!");

    socket.on("new_user", function (data) {
        users[socket.id] = {
            name: data.name
        };
        console.log(users[socket.id]);
        socket.emit('existing_messages', messages);
        io.emit("display_new_user", {
            name: data.name
        })
    });
    socket.on("new_message", function (data) {
        messages[id] = {
            name: data.name,
            message: data.message
        };
        io.emit("update_messages", messages[id]);
        id++;
    })
    socket.on("disconnect", function () {
        io.emit("user_disconnect", users[socket.id])
    })
})