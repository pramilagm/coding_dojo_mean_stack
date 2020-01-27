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
    console.log(req.params._id)
    Author.remove({
        _id: req.params._id
      })
      .then(authors => res.json(authors))
      .catch(err => res.json(err));
  },
  createQuote: function (request, response) {
    console.log(request.body)
    Author.findById(request.params._id)
      .then(author => {
        author.quotes.push(request.body)
        return author.save();
      })
      .then(author => response.json(author))
      .catch(err => response.json(err));
  },
  show_author: function (req, res) {
    Author.findOne({
        _id: req.params._id
      })
      .then(authors => res.json(authors))
      .catch(err => res.json(err));
  },
  update_author: (req, res) => {
    console.log("REQ BODY: ", req.body);
    Author.findByIdAndUpdate(req.params._id,
        req.body, {
          runValidators: true
        }
      )
      .then(authors => res.json(authors))
      .catch(err => res.json(err));
  },
  updateQuote: function (req, res) {
    Author.findOneAndUpdate({
        "quotes._id": req.params._id
      }, {
        $inc: {
          "quotes.$.vote": req.body.votes
        }
      }, {
        new: true,
        runValidators: true
      })
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err))
  },
};