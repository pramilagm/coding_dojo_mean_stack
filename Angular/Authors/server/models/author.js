const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "Name must be 3 words"],
    required: [true, "Name is required"],
  }
}, {
  timestamps: true
});

const Author = mongoose.model("Author", AuthorSchema);