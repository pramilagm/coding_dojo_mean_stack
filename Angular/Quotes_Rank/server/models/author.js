const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [3, "Name must be 3 words"],
      required: [true, "Name is required"]
    },
    quotes: [
      {
        quote_name: {
          type: String,
          minlength: [3, "kksk"]
        },
        vote: {
          type: Number,
          default: 0
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

const Author = mongoose.model("Author", AuthorSchema);
