const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
const server = app.listen(8000);
const io = require("socket.io")(server);
var users = [];

app.use(
  express.urlencoded({
    extended: true
  })
);
app.get("/", (req, res) => {
  res.render("index");
});
// create server's connection listener to run, and this occurs for every new socket connection
io.on("connection", function(socket) {
  //2
  socket.on("got_new_user", function(data) {
    users[socket.id] = {
      name: data.name
    };
    io.emit("new_user", {
      name: data.name
    });
    users.push(data);
    io.emit("existing_user", users);
  });
});
