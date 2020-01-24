const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  }
}, {
  timestamps: true
});

const Author = mongoose.model("Author", AuthorSchema);