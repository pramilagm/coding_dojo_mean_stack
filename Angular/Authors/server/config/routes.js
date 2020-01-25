const routers = require("../controllers/hellos");
module.exports = function (app) {
  app.get("/authors", helloController.index);

  app.post("/new", helloController.add_author);

  app.delete("/remove/:_id", helloController.remove_author);

  app.get("/author/:_id", helloController.show_author);

  app.put("/edit/:_id", helloController.update_author);
};