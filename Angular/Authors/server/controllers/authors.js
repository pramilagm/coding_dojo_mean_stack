require("../models/author");
const mongoose = require("mongoose");
const Author = mongoose.model("Author");

module.exports = {
  index: function (req, res) {
    Author.find()
      .then(authors => res.json(authors))
      .catch(err => res.json(err));
  },
  add_author: function (req, res) {
    console.log("REQ BODY: ", req.body);
    const newAuthor = new Author(req.body);
    newAuthor
      .save()
      .then(authors => res.json(authors))
      .catch(err => res.json(err));
  },
  remove_author: function (req, res) {
    console.log(req.params.author)
    Author.remove({
        author: req.params.author
      })
      .then(authors => res.json(authors))
      .catch(err => res.json(err));
  },
  show_author: function (req, res) {
    Author.findOne({
        author: req.params._id
      })
      .then(authors => res.json(authors))
      .catch(err => res.json(err));
  },
  update_author: (req, res) => {
    console.log("REQ BODY: ", req.body);
    Author.findByIdAndUpdate(req.params._id,
        req.body
      )
      .then(authors => res.json(authors))
      .catch(err => res.json(err));
  }
};