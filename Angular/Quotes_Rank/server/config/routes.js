const routers = require("../controllers/authors");
module.exports = function (app) {
  app.get("/authors", routers.index);

  app.post("/new", routers.add_author);

  app.delete("/remove/:_id", routers.remove_author);

  app.get("/author/:_id", routers.show_author);

  app.put("/edit/:_id", routers.update_author);
  app.post('/write/:_id', routers.createQuote);
  app.patch('/quotes/:quote_id', routers.updateQuote);
};