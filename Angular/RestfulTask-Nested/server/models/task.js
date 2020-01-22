const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: ""
  },
  des: {
    type: String,
    optional: "",
    minlength: 6
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});
const Task = mongoose.model("Task", TaskSchema);