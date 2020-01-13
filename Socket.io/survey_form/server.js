const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
const server = app.listen(8000);
const io = require("socket.io")(server);
var counter = 0;
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});
// create server's connection listener to run, and this occurs for every new socket connection
io.on("connection", function(socket) {
  //2
  var random_number = Math.floor(Math.random() * 1000 + 1);
  //server listens to "form-posting" event
  socket.on("form-posting", function(data) {
    socket.emit("update-message", { response: data }); //3

    socket.emit("random-number", { response: random_number });
  });
});
