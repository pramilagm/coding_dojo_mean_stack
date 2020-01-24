const authors = require("../controllers/authors");
module.exports = function (app) {
  app.get("/authors", authors.index);

  app.post("/new", authors.add_author);

  app.delete("/remove/:author", authors.remove_author);

  //   app.get("/author/:_id", authors.show_author);

  app.put("/edit/:_id", authors.update_author);
};